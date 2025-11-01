function solution(numbers) {
    const getPermutations = (arr, selectNum) => {
        const result = [];
        if (selectNum === 1) return arr.map(el => [el]);
        
        arr.forEach((fixed, index, origin) => {
            const rest = [...origin.slice(0, index), ...origin.slice(index+1)];
            const permutations = getPermutations(rest, selectNum-1);
            const attached = permutations.map(el => [fixed, ...el]);
            result.push(...attached);
        });
        
        return result;
    }
    const isPrime = (num) => {
        if (num<2) return false;
        if (num===2) return true;
        
        for (let i=2; i<=Math.sqrt(num); i++) {
            if (num%i===0) return false;
        }
        return true;
    };
    
    const numbersArr = numbers.split('');
    const permutations = new Set();
    for (let i=1; i<=numbersArr.length; i++) {
        const result = getPermutations(numbersArr, i);
        result.forEach(v => {
            const number = Number(v.join(''));
            isPrime(number) && permutations.add(number);
        });
    };
    // console.log(permutations);
    return permutations.size;
}