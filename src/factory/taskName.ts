/**
 * タスク名
 */
enum TaskName {
    /**
     * 口座転送中止
     */
    CancelAccountMoneyTransfer = 'cancelAccountMoneyTransfer',
    /**
     * 口座転送
     */
    AccountMoneyTransfer = 'accountMoneyTransfer',
    /**
     * 口座転送返金
     */
    ReturnAccountMoneyTransfer = 'returnAccountMoneyTransfer'
}

export default TaskName;
