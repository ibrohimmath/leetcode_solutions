class Bank {
    balance: number[];

    constructor(balance: number[]) {
        this.balance = balance;
    }

    isValidAccount(account: number) {
        if (account < 1 || account > this.balance.length) return false; 
        return true;
    }

    transfer(account1: number, account2: number, money: number): boolean {
        if (!this.isValidAccount(account1) || !this.isValidAccount(account2)) {
            return false;
        }
        if (this.withdraw(account1, money)) {
            return this.deposit(account2, money);
        }
        return false;
    }

    deposit(account: number, money: number): boolean {
        if (!this.isValidAccount(account)) return false;
        this.balance[account - 1] += money;
        return true;
    }

    withdraw(account: number, money: number): boolean {
        if (!this.isValidAccount(account) || this.balance[account - 1] < money) {
            return false;
        }
        this.balance[account - 1] -= money;
        return true;
    }
}

/**
 * Your Bank object will be instantiated and called as such:
 * var obj = new Bank(balance)
 * var param_1 = obj.transfer(account1,account2,money)
 * var param_2 = obj.deposit(account,money)
 * var param_3 = obj.withdraw(account,money)
 */