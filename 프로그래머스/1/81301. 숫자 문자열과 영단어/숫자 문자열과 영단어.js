function solution(s) {
    const numbers = {
        0:'zero', 1:'one', 2:'two', 3:'three',
        4:'four', 5:'five', 6:'six',
        7:'seven', 8:'eight', 9:'nine'
    };
    for (let i=0; i<10; i++) {
        s = s.replaceAll(numbers[i], i);
    };
    return +s;
}