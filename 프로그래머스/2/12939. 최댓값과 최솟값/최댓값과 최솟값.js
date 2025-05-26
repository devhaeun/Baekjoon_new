function solution(s) {
    const lst = s.split(' ')
    for (let i=0; i<lst.length; i++) {
        lst[i] = parseInt(lst[i])
    }

    return (`${String(Math.min(...lst))} ${String(Math.max(...lst))}`)
}