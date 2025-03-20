function solution(orders, course) {
    const result = [];
    const map = new Map();
    const combinations = [];
    
    // 메뉴가 2개 이상일 때만 combinations에 담는 것을 재귀적으로 반복
    const combination = (menus, pick) => {
        if (pick.length>=2) combinations.push(pick);
        
        if (!menus.length) return;
        
        for (let i=0; i<menus.length; i++) {
            const picked = menus[i];
            const deletedMenu = menus.slice(i+1);
            combination(deletedMenu, pick+picked);
        }
    };
    
    orders.forEach(order => {
        combination([...order].sort().join(''), '');
    });
    
    // 모든 조합 순회하면서 같은 조합끼리는 합치고 개수 저장
    combinations.forEach(menu => {
        const isExist = map.has(menu);
        map.set(menu, isExist ? map.get(menu)+1 : 1);
    });
    
    // 모든 조합을 조합의 개수 순서로 오름차순 정렬하고
    // 1명만 주문한 조합 삭제
    const menuArr = [...map.entries()]
        .sort(([_, firstCount], [__, secondCount]) => secondCount-firstCount)
        .filter(([_, menuCount]) => menuCount!==1);
    
    // course를 돌면서 각각의 메뉴 조합의 글자수와 같은 것을 찾고
    // 메뉴가 기록된 개수보다 조금 주문되었으면 break로 for문 탈출
    course.forEach(menuLength => {
        let countMemo = 0;
        for (let i=0; i<menuArr.length; i++) {
            const [menu, count] = menuArr[i];
            
            if (countMemo > count) break;
            
            if (menu.length === menuLength) {
                if (!countMemo) countMemo = count;
                result.push(menu);
            }
        }
    });
    
    return result.sort();
}