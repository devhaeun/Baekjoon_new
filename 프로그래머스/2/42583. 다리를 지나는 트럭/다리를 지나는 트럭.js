function solution(bridge_length, weight, truck_weights) {
    const trucks = truck_weights.map(weight => {
        return {weight, time: 0}
    });
    const onBridge = [];
    let time = 0;
    
    while (true) {
        // console.log(onBridge);
        time++;
        onBridge.map(v=>v.time++);
        
        if (onBridge.length!=0 && onBridge[0].time>bridge_length) onBridge.shift();
        if (onBridge.length==0 && trucks.length==0) return time;
        
        if (onBridge.length===0) {
            onBridge.push(trucks.shift());
            onBridge[0].time++;
        } else {
            const onBridgeWeights = onBridge.reduce((acc,cur)=>acc+cur.weight, 0);
            if (trucks.length!=0 && onBridgeWeights+trucks[0].weight<=weight) {
                trucks[0].time++;
                onBridge.push(trucks.shift());
            };
        }
    }
}