/**
 * pecorino-factory
 * @module
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
import OrganizationType from './factory/organizationType';
import PersonType from './factory/personType';
import PriceCurrency from './factory/priceCurrency';
import * as TaskFactory from './factory/task';
import * as CancelMoneyTransferTaskFactory from './factory/task/cancelMoneyTransfer';
import * as MoneyTransferTaskFactory from './factory/task/moneyTransfer';
import * as TaskExecutionResultFactory from './factory/taskExecutionResult';
import TaskName from './factory/taskName';
import TaskStatus from './factory/taskStatus';

import * as TransactionFactory from './factory/transaction';
import * as DepositTransactionFactory from './factory/transaction/deposit';
import * as TransferTransactionFactory from './factory/transaction/transfer';
import * as WithdrawTransactionFactory from './factory/transaction/withdraw';
import TransactionStatusType from './factory/transactionStatusType';
import TransactionTasksExportationStatus from './factory/transactionTasksExportationStatus';
import TransactionType from './factory/transactionType';

import * as URLFactory from './factory/url';

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
export import organizationType = OrganizationType;
export import personType = PersonType;
export import priceCurrency = PriceCurrency;
export namespace task {
    export import IAttributes = TaskFactory.IAttributes;
    export import ITask = TaskFactory.ITask;
    export import cancelMoneyTransfer = CancelMoneyTransferTaskFactory;
    export import moneyTransfer = MoneyTransferTaskFactory;
}
export import taskExecutionResult = TaskExecutionResultFactory;
export import taskName = TaskName;
export import taskStatus = TaskStatus;
export namespace transaction {
    export type IStartParams<T> =
        T extends TransactionType.Deposit ? DepositTransactionFactory.IStartParams :
        T extends TransactionType.Withdraw ? WithdrawTransactionFactory.IStartParams :
        T extends TransactionType.Transfer ? TransferTransactionFactory.IStartParams :
        TransactionFactory.IStartParams<TransactionType, any, any, any>;
    export type IAttributes<T> =
        T extends TransactionType.Deposit ? DepositTransactionFactory.IAttributes :
        T extends TransactionType.Withdraw ? WithdrawTransactionFactory.IAttributes :
        T extends TransactionType.Transfer ? TransferTransactionFactory.IAttributes :
        TransactionFactory.IAttributes<any, any, any, any>;
    export type ITransaction<T> =
        T extends TransactionType.Deposit ? DepositTransactionFactory.ITransaction :
        T extends TransactionType.Withdraw ? WithdrawTransactionFactory.ITransaction :
        T extends TransactionType.Transfer ? TransferTransactionFactory.ITransaction :
        TransactionFactory.ITransaction<any, any, any, any>;
    export type IResult<T> =
        T extends TransactionType.Deposit ? DepositTransactionFactory.IResult :
        T extends TransactionType.Withdraw ? WithdrawTransactionFactory.IResult :
        T extends TransactionType.Transfer ? TransferTransactionFactory.IResult :
        any;
    export type IPotentialActions<T> =
        T extends TransactionType.Deposit ? DepositTransactionFactory.IPotentialActions :
        T extends TransactionType.Withdraw ? WithdrawTransactionFactory.IPotentialActions :
        T extends TransactionType.Transfer ? TransferTransactionFactory.IPotentialActions :
        any;
    export import withdraw = WithdrawTransactionFactory;
    export import deposit = DepositTransactionFactory;
    export import transfer = TransferTransactionFactory;
}
export import transactionStatusType = TransactionStatusType;
export import transactionTasksExportationStatus = TransactionTasksExportationStatus;
export import transactionType = TransactionType;
export import url = URLFactory;
