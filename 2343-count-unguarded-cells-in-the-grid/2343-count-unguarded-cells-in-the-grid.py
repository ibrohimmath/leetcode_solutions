class Solution(object):
    def countUnguarded(self, m, n, guards, walls):
        """
        :type m: int
        :type n: int
        :type guards: List[List[int]]
        :type walls: List[List[int]]
        :rtype: int
        """
        dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]]
        # -1 -> empty 
        # 0 -> seen
        # 1 -> wall 
        # 2 -> guard
        val = [[-1] * n for _ in range(m)]
        for x, y in guards:
            val[x][y] = 2 
        for x, y in walls:
            val[x][y] = 1

        for x in range(m):
            for y in range(n):
                if val[x][y] != 2:
                    continue
                    
                for dx, dy in dirs:
                    xx, yy = x, y
                    while True:
                        xx += dx
                        yy += dy
                        if xx < 0 or xx >= m or yy < 0 or yy >= n or val[xx][yy] > 0:
                            break
                        val[xx][yy] = 0

        counter = 0
        for x in range(m):
            for y in range(n):
                if val[x][y] == -1:
                    counter += 1

        print(val)

        return counter