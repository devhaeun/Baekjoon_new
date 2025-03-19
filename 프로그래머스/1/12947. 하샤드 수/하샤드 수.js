function solution(x) {
    let sum = 0;
    let test_x = x;
    while (test_x) {
        sum += test_x%10;
        test_x = Math.floor(test_x/10);
        if (test_x<10) {
            sum+=test_x;
            break;
        }
    }
    console.log(sum);
    return x%sum===0 ? true : false;
}