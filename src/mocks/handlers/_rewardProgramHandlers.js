import {http, HttpResponse} from 'msw';
import { MOCK_CONFIG } from '../config';

const rewardProgramHandlers = [
    http.get('/api/rewardProgramConfig', () => {
        return HttpResponse.json(MOCK_CONFIG.rewardPropgram)
    })
]

export default rewardProgramHandlers;