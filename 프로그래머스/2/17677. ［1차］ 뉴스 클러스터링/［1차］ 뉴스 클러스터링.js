function solution(str1, str2) {
    // 두 문자열 대문자로 만들기
    str1 = str1.toUpperCase();
    str2 = str2.toUpperCase();
    
    let union = 0;
    let intersect = 0;
    
    // str1에서 나온 글자 쌍과 개수를 저장하는 해시맵 생성
    const std = new Map();
    for (let i=0; i<str1.length-1; i++) {
        const string = str1.slice(i,i+2);
        if (string.replace(/[^A-Z]/,'')!==string) continue;
        union += 1;
        std.has(string) ? std.set(string, std.get(string)+1) : std.set(string, 1);
    }
    
    // str2에서 나온 글자 쌍과 개수를 저장하며 합집합과 교집합 수 구하기
    const str2map = new Map();
    for (let i=0; i<str2.length-1; i++) {
        const string = str2.slice(i,i+2);
        if (string.replace(/[^A-Z]/,'')!==string) continue;
        if (std.has(string)) {
            if (str2map.has(string)) {
                str2map.set(string, str2map.get(string)+1);
                str2map.get(string) > std.get(string) ? union += 1 : intersect += 1;
            } else {
                str2map.set(string, 1);
                intersect += 1;
            }
        } else {
            str2map.has(string) ? str2map.set(string, str2map.get(string)+1) : str2map.set(string, 1);
            union += 1;
        }
    }
    
    return union===0 ? 65536 : Math.floor(65536 * intersect / union);
}