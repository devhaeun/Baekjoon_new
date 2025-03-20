function solution(fees, records) {
    const parking = {};
    
    records.forEach(v => {
        const [time, id, status] = v.split(" ");
        const [hour, minute] = time.split(":");
        const replaceTime = hour*60 + +minute;
        
        if (!parking[id]) {
            parking[id] = { time: 0, id };
        }
        
        parking[id].status = status;
        
        if (status==="IN") {
            parking[id].lastInTime = replaceTime;
            return;
        }
        
        // 주차 시간에 (현재 입고 시간 - 마지막 입고 시간) 더하기
        parking[id].time += replaceTime - parking[id].lastInTime;
    });
    
    // 차량 번호 낮은 순서로 비용 return
    return Object.values(parking)
        .sort((a,b) => a.id-b.id)
        .map(v => {
        if (v.status==="IN") v.time += 1439 - v.lastInTime;
        if (fees[0]>v.time) return fees[1];
        return fees[1] + Math.ceil((v.time-fees[0])/fees[2])*fees[3];
    });
}