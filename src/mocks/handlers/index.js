import transactionsHandlers from './_transactionsHandlers';
import rewardProgramHandlers from './_rewardProgramHandlers';

export const handlers = [
    ...transactionsHandlers,
    ...rewardProgramHandlers
]