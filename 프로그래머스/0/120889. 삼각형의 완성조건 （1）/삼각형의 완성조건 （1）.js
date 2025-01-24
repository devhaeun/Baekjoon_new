function solution(sides) {
    const maxl = sides.reduce((a,b)=>Math.max(a,b), 0);
    const suml = sides.reduce((a,b)=>a+b, 0);
    return maxl<suml-maxl ? 1 : 2;
}