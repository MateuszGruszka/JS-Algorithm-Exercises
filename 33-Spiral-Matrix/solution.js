class Solution:
    def spiralOrder(self, matrix):
     
        def ring(r1,r2,c1,c2):
            for c in range(c1, c2+1):
                yield r1,c
            for r in range(r1+1, r2+1):
                yield r,c2
            if (r1 < r2 and c1 < c2):
                for c in reversed(range(c1+1, c2)):
                    yield r2,c
                for r in reversed(range(r1+1, r2+1)):
                    yield r,c1
          
        if not matrix: return []
        ans = []
        r1, r2 = 0, len(matrix) - 1
        c1, c2 = 0, len(matrix[0]) - 1
        
        while (r1 <= r2 and c1 <= c2):
            for r,c in ring(r1,r2,c1,c2):
                ans.append(matrix[r][c])
                
            r1 +=1
            r2 -=1
            c1 +=1
            c2 -=1
        
        return ans
            