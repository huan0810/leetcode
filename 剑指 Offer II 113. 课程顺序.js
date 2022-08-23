/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    // 拓扑排序
    let stack = []//栈，入度为0的节点入栈
    let indeg = new Array(numCourses).fill(0)//记录每个节点的入度,初始为0
    let topo = []//最后要输出的拓扑序列
    for(let i=0;i<prerequisites.length;i++){
        indeg[prerequisites[i][0]]++
    }
    for(let i=0;i<numCourses;i++){
        if(indeg[i] == 0) stack.push(i)
    }
    while(stack.length){
        let top = stack.pop()
        topo.push(top)
        for(let j=0;j<prerequisites.length;j++){
            if(prerequisites[j][1] == top){
                if(--indeg[prerequisites[j][0]] == 0){
                    stack.push(prerequisites[j][0])
                }
            }
        }
    }
    if(topo.length < numCourses) return []
    return topo
};