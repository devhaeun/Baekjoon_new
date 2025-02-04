function solution(numbers) {
    var result = new Set();
    
    function getPermutation (arr, fixed) {
        if(arr.length >= 1) {
            for (let i=0; i<arr.length; i++) {
                const newFixed = fixed + arr[i];
                const copyArr = [...arr];
                copyArr.splice(i, 1);
                
                if(isPrimeNumber(parseInt(newFixed))) {
                    result.add(parseInt(newFixed));
                }
                
                getPermutation(copyArr, newFixed);
            }
        }
    }
    
    function isPrimeNumber(num) {
        if (num <= 1) return false;
        if (num === 2) return true;
        for( let i = 2; i <= Math.sqrt(num); i++) {
           if(num % i === 0) {
               return false;
           }
        }
        return true;
    }
    
    getPermutation(numbers, '')

    return result.size;
}