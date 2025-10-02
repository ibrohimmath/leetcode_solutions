class Solution:
    def maxBottlesDrunk(self, numBottles: int, numExchange: int) -> int:
        total = numBottles

        while numBottles >= numExchange:
            numBottles -= numExchange - 1
            numExchange += 1
            total += 1
        
        return total