import {Transaction} from "../types/schema";
import {Deposit, Withdraw} from "../types/SolarDistributorV2/SolarDistributorV2";


export function handleDepositEvent(event: Deposit): void {
    let transaction = new Transaction(event.transaction.hash.toHexString());
    transaction.timestamp = event.block.timestamp;
    transaction.wallet = event.transaction.from.toHexString();
    transaction.action = "deposit";
    transaction.amount = event.params.amount.toBigDecimal();
    transaction.pool = event.params.pid.toString();
    transaction.save();
}

export function handleWithdrawEvent(event: Withdraw): void {
    let transaction = new Transaction(event.transaction.hash.toHexString());
    transaction.timestamp = event.block.timestamp;
    transaction.wallet = event.transaction.from.toHexString();
    transaction.action = "withdraw";
    transaction.amount = event.params.amount.toBigDecimal();
    transaction.pool = event.params.pid.toString();
    transaction.save();
}


