function solution(numbers) {
    const result = new Set();
    
    const isPrime = (num) => {
        if (num<=1) return false;
        if (num===2) return true;
        for (let i=2; i<=Math.sqrt(num); i++) {
            if (num%i===0) return false;
        }
        return true;
    };
    
    const getPermutation = (arr, fixed) => {
        if (arr.length>=1) {
            for (let i=0; i<arr.length; i++) {
                const newFixed = fixed+arr[i];
                const copyArr = [...arr];
                copyArr.splice(i,1);
                
                if (isPrime(+newFixed)) result.add(+newFixed);
                getPermutation(copyArr, newFixed);
            }
        }
    };
    
    getPermutation(numbers, "");
    return result.size;
}