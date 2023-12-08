import transactionsHandlers from './_transactionsHandlers';
import rewardProgramHandlers from './_rewardProgramHandlers';
import customerHandlers from './_customerHandlers';

export const handlers = [
    ...transactionsHandlers,
    ...rewardProgramHandlers,
    ...customerHandlers
]