import _ from 'lodash';

class Account {

    /**
     * @param title string
     * @param balance Money
     */
    constructor(title, balance) {
        this.title = title;
        this.initialBalance = balance;
        this.balance = balance;
        this.description = '';
        this.accountType = null;
        this.transactions = [];
    }

    /**
     * @param transaction Transaction
     */
    addTransaction(transaction) {
        if (!this.equals(transaction.account))
            throw new Exception('transaction must belong to this account');

        this.transactions.push(transaction);
    }

    removeTransaction(transaction) {
        this.transactions = _.without(this.transactions, transaction);
    }

    equals(otherAccount) {
        return this.title === otherAccount.title;
    }
}

export default Account;