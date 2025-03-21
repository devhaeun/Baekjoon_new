function solution(s) {
    // 단축 최소값 저장
    let minLen = Math.Inf;
    const lenArr = [];
    
    for (let i=0; i<s.length; i++) {
        let unit=i+1;
        let count=1;
        let zippedStr = '';
        
        for (let j=0; j<s.length; j+=unit) {
            let curSub = s.substr(j, unit);
            let nextSub = s.substr(j+unit, unit);
            
            if (curSub===nextSub) count++;
            else {
                count===1 ? zippedStr+=curSub
                : zippedStr+=count+curSub;
                count=1;
            }
        }
        lenArr.push(zippedStr.length);
    }
    
    return Math.min(...lenArr);
}