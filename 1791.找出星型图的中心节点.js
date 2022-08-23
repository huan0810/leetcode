/*
 * @lc app=leetcode.cn id=1791 lang=javascript
 *
 * [1791] 找出星型图的中心节点
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
  // 图

  // 法1：效率太低，还是看看官方的思路
  // 遍历数组每个元素，填入map，最后map中value值大于1的就是中心节点
  // let map = new Map();
  // for(let [u,v] of edges){
  //     if(map.has(u)){
  //         let temp = map.get(u);
  //         map.set(u, ++temp);
  //     }else{
  //         map.set(u, 1);
  //     }
  //     if(map.has(v)){
  //         let temp = map.get(v);
  //         map.set(v, ++temp);
  //     }else{
  //         map.set(v, 1);
  //     }
  // }
  // for(let [key, val] of map.entries()){
  //     if(val > 1) return key;
  // }

  // 法2：官方思路：找出度为n-1的那个节点，
  // 其实和我的思路差不多，就是用一个数组记录每个节点出现的次数（就是此节点的度）
  let nodeNum = edges.length + 1 //节点个数=边的个数+1
  let arr = new Array(nodeNum + 1).fill(0)
  for (const edge of edges) {
    arr[edge[0]]++
    arr[edge[1]]++
  }
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === edges.length) return i
  }
}
// @lc code=end
