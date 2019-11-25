/**
 * factory
 */
import * as AccountFactory from './factory/account';
import AccountStatusType from './factory/accountStatusType';

import * as ActionFactory from './factory/action';
import * as MoneyTransferActionFactory from './factory/action/transfer/moneyTransfer';
import * as SendEmailMessageActionFactory from './factory/action/transfer/send/message/email';
import ActionStatusType from './factory/actionStatusType';
import ActionType from './factory/actionType';

import * as ClientUserFactory from './factory/clientUser';
import * as EmailMessageFactory from './factory/creativeWork/message/email';
import CreativeWorkType from './factory/creativeWorkType';
import PriceCurrency from './factory/priceCurrency';
import * as ProjectFactory from './factory/project';
import * as TaskFactory from './factory/task';
import * as CancelMoneyTransferTaskFactory from './factory/task/cancelMoneyTransfer';
import * as MoneyTransferTaskFactory from './factory/task/moneyTransfer';
import TaskName from './factory/taskName';
import TaskStatus from './factory/taskStatus';

import * as TransactionFactory from './factory/transaction';
import * as DepositTransactionFactory from './factory/transaction/deposit';
import * as TransferTransactionFactory from './factory/transaction/transfer';
import * as WithdrawTransactionFactory from './factory/transaction/withdraw';
import TransactionStatusType from './factory/transactionStatusType';
import TransactionTasksExportationStatus from './factory/transactionTasksExportationStatus';
import TransactionType from './factory/transactionType';

import SortType from './factory/sortType';

import ErrorCode from './factory/errorCode';
import * as errors from './factory/errors';

export import errors = errors;
export import errorCode = ErrorCode;

export import actionStatusType = ActionStatusType;
export import actionType = ActionType;
export namespace action {
    export import IAction = ActionFactory.IAction;
    export import IAttributes = ActionFactory.IAttributes;
    export import IParticipant = ActionFactory.IParticipant;
    export import IPurpose = ActionFactory.IPurpose;

    export namespace transfer {
        export import moneyTransfer = MoneyTransferActionFactory;

        export namespace send {
            export namespace message {
                export import email = SendEmailMessageActionFactory;
            }
        }
    }
}
export import account = AccountFactory;
export import accountStatusType = AccountStatusType;
export import clientUser = ClientUserFactory;
export namespace creativeWork {
    export namespace message {
        export import email = EmailMessageFactory;
    }
}
export import creativeWorkType = CreativeWorkType;
export import priceCurrency = PriceCurrency;
export import project = ProjectFactory;
export namespace task {
    export import IAttributes = TaskFactory.IAttributes;
    export import IExecutionResult = TaskFactory.IExecutionResult;
    export import ITask = TaskFactory.ITask;
    export import cancelMoneyTransfer = CancelMoneyTransferTaskFactory;
    export import moneyTransfer = MoneyTransferTaskFactory;
}
export import sortType = SortType;
export import taskName = TaskName;
export import taskStatus = TaskStatus;
export namespace transaction {
    export type IStartParams<T extends TransactionType, T1 extends AccountFactory.AccountType> =
        T extends TransactionType.Deposit ? DepositTransactionFactory.IStartParams<T1> :
        T extends TransactionType.Withdraw ? WithdrawTransactionFactory.IStartParams<T1> :
        T extends TransactionType.Transfer ? TransferTransactionFactory.IStartParams<T1> :
        TransactionFactory.IStartParams<TransactionType, any, any, any>;
    export type IAttributes<T, T1 extends AccountFactory.AccountType> =
        T extends TransactionType.Deposit ? DepositTransactionFactory.IAttributes<T1> :
        T extends TransactionType.Withdraw ? WithdrawTransactionFactory.IAttributes<T1> :
        T extends TransactionType.Transfer ? TransferTransactionFactory.IAttributes<T1> :
        TransactionFactory.IAttributes<any, any, any, any>;
    export type ITransaction<T, T1 extends AccountFactory.AccountType> =
        T extends TransactionType.Deposit ? DepositTransactionFactory.ITransaction<T1> :
        T extends TransactionType.Withdraw ? WithdrawTransactionFactory.ITransaction<T1> :
        T extends TransactionType.Transfer ? TransferTransactionFactory.ITransaction<T1> :
        TransactionFactory.ITransaction<any, any, any, any>;
    export type IResult<T> =
        T extends TransactionType.Deposit ? DepositTransactionFactory.IResult :
        T extends TransactionType.Withdraw ? WithdrawTransactionFactory.IResult :
        T extends TransactionType.Transfer ? TransferTransactionFactory.IResult :
        any;
    export type IPotentialActions<T, T1 extends AccountFactory.AccountType> =
        T extends TransactionType.Deposit ? DepositTransactionFactory.IPotentialActions<T1> :
        T extends TransactionType.Withdraw ? WithdrawTransactionFactory.IPotentialActions<T1> :
        T extends TransactionType.Transfer ? TransferTransactionFactory.IPotentialActions<T1> :
        any;
    export import withdraw = WithdrawTransactionFactory;
    export import deposit = DepositTransactionFactory;
    export import transfer = TransferTransactionFactory;
}
export import transactionStatusType = TransactionStatusType;
export import transactionTasksExportationStatus = TransactionTasksExportationStatus;
export import transactionType = TransactionType;
