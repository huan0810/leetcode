/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    // 自己ac，牛逼
    // floyd算法，求任意两点间最短路径
    let nodes = new Array()//存放equations中所有节点
    for(const node of equations.flat()){
        if(!nodes.includes(node)){
            nodes.push(node)
        }
    }
    let n = nodes.length 
    let distance = new Array(n).fill(-1.0).map(() => new Array(n).fill(-1.0))
    for(let i=0;i<equations.length;i++){
        let row = nodes.indexOf(equations[i][0])
        let col = nodes.indexOf(equations[i][1])
        distance[row][col] = values[i]
        distance[col][row] = 1 / values[i]
    }
    //节点数目
    for(let i=0; i<n; i++){
        //行
        for(let j=0; j<n; j++){
            //列
            for(let k=0; k<n; k++){
                if(j == k) {
                    distance[j][k] = 1.0
                }else if(distance[j][i]>0 && distance[i][k]>0){
                    distance[j][k] = distance[j][i] * distance[i][k]
                }
            }
        }
    }

    // 根据以上floyd算法求出的矩阵，找queries中的答案
    let ans = new Array(queries.length).fill(-1.0)
    for(let i=0; i<queries.length; i++){
        let row = nodes.indexOf(queries[i][0])
        let col = nodes.indexOf(queries[i][1])
        if(row !== -1 && col !== -1){
            ans[i] = distance[row][col]
        }
    }
    return ans
};