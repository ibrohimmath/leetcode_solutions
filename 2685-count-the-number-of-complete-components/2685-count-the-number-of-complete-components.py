class Solution:
    def countCompleteComponents(self, n: int, edges: List[List[int]]) -> int:
        g = [[] for _ in range(n)]
        for u, v in edges:
            g[u].append(v)
            g[v].append(u)

        vis = [False] * n

        res = 0
        for i in range(n):
            if vis[i]: continue

            nodes = 0
            edges = 0

            l = 0
            q = [i]
            while l < len(q):
                u = q[l]
                l += 1

                if vis[u]: continue
                vis[u] = True
                nodes += 1

                for v in g[u]:
                    edges += 1
                    q.append(v)
            print(i, nodes, edges)
            res += int(edges == nodes * (nodes - 1)) 

        return res
