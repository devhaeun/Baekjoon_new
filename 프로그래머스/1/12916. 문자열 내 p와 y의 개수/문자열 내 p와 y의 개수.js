function solution(s){
    let cntY=0, cntP=0;
    
    for (let i=0; i<s.length; i++) {
        if (s[i]==='p' || s[i]==='P') cntP++;
        else if (s[i]==='y' || s[i]==='Y') cntY++;
    }
    
    return cntY===cntP
}