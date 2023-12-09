import {http, HttpResponse} from 'msw';

const rewardProgramHandlers = [
    http.get('/api/rewardProgramConfig', () => {
        return HttpResponse.json({
            basePointValue: 1,
            pointRanges: [
                {from: 50, to: 100, multiple: 1},
                {from: 100, to: null, multiple: 2}
            ]
        })
    })
]

export default rewardProgramHandlers;