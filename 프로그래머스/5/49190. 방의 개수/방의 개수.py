def solution(arrows):
    dx=[0,1,1,1,0,-1,-1,-1]
    dy=[1,1,0,-1,-1,-1,0,1]
    
    x,y=0,0
    visited_node = set()
    visited_node.add((x,y))
    route = set()
    cycle = 0
    
    for arrow in arrows:
        for _ in range(2):
            nx = x+dx[arrow]
            ny = y+dy[arrow]
            if (nx,ny) in visited_node and (x,y,nx,ny) not in route:
                cycle+=1
            visited_node.add((nx, ny))
            route.add((x,y,nx,ny))
            route.add((nx,ny,x,y))
            x,y = nx,ny
    return cycle