function solution(cacheSize, cities) {
    const cache = [];
    let time = 0;
    
    if (cacheSize==0) return cities.length*5;
    
    for (let i=0; i<cities.length; i++) {
        const city = cities[i].toLowerCase();
        if (cache.includes(city)) {
            cache.splice(cache.indexOf(city),1);
            cache.push(city);
            time+=1;
        } else if (cache.length<cacheSize) {
            cache.push(city);
            time+=5;
        } else {
            cache.splice(0,1);
            cache.push(city);
            time+=5;
        }
    }
    return time;
}