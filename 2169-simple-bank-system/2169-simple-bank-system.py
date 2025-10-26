class Bank:

    def __init__(self, balance: List[int]):
        self.balance = balance        

    def isValid(self, account: int) -> bool:
        if account < 1 or account > len(self.balance):
            return False
        return True

    def transfer(self, account1: int, account2: int, money: int) -> bool:
        if not self.isValid(account1) or not self.isValid(account2):
            return False
        if self.withdraw(account1, money):
            return self.deposit(account2, money)
        return False

    def deposit(self, account: int, money: int) -> bool:
        if not self.isValid(account):
            return False
        self.balance[account - 1] += money
        return True

    def withdraw(self, account: int, money: int) -> bool:
        if not self.isValid(account) or self.balance[account - 1] < money:
            return False
        self.balance[account - 1] -= money
        return True
        
        


# Your Bank object will be instantiated and called as such:
# obj = Bank(balance)
# param_1 = obj.transfer(account1,account2,money)
# param_2 = obj.deposit(account,money)
# param_3 = obj.withdraw(account,money)