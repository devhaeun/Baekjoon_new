// Get Parent
const getParent = (parent, a) => {
    if (parent[a]===a) return a;
    return getParent(parent, parent[a]);
};

// Find Parent
const findParent = (parent, a, b) => {
    const n1 = getParent(parent, a);
    const n2 = getParent(parent, b);
    return n1===n2 ? true : false;
}

// Union Parent
const unionParent = (parent, a, b) => {
    const n1 = getParent(parent, a);
    const n2 = getParent(parent, b);
    return n1<n2 ? parent[n2]=n1 : parent[n1]=n2;
}

function solution(n, costs) {
    const parent = Array(n).fill(0).map((v,i)=>i);
    let answer = 0;
    
    costs.sort((a,b) => a[2]-b[2]);
    
    for (cost of costs) {
        if (!findParent(parent, cost[0], cost[1])) {
            answer += cost[2];
            unionParent(parent, cost[0], cost[1]);
        }
    }
    
    return answer;
}