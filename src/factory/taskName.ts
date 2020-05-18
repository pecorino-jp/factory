/**
 * タスク名
 */
enum TaskName {
    /**
     * 通貨転送中止
     */
    CancelMoneyTransfer = 'cancelMoneyTransfer',
    /**
     * 通貨転送
     */
    MoneyTransfer = 'moneyTransfer',
    /**
     * 通貨転送返金
     */
    ReturnMoneyTransfer = 'returnMoneyTransfer'
}

export default TaskName;
