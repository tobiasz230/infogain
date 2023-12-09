const fakeBasePointValue = 1;

const fakeRewardRanges = [
    {from: 50, to: 100, multiple: 1},
    {from: 100, to: null, multiple: 3}
]

const fakePrice = 122.888;


// TODO: remove fake data;
export const getRewardPointsByTransaction = (price = fakePrice, basePointValue = fakeBasePointValue,  pointRanges = fakeRewardRanges) => {
    const priceWithoutRest = Math.floor(price);

    return pointRanges.reduce((points, pointRange) => {
        const {from, to, multiple} = pointRange;
        const multiplier = basePointValue * multiple;
        
        switch(true) {
            case (priceWithoutRest > from && (!to || priceWithoutRest <= to)):
                return points += (priceWithoutRest - from) * multiplier 
            case(price > from && priceWithoutRest <= to):
                return points += (to - from) * multiplier 
            case(price > from && priceWithoutRest > to):
                return points += (to - from) * multiplier 
            default:
                return 0;
        } 
    }, 0);
}
