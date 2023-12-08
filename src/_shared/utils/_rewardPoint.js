export const getRewardPointsByTransaction = (price, basePointValue, pointRanges) => {
    const priceWithoutRest = Math.floor(price);

    return pointRanges.reduce((points, pointRange) => {
        const {from, to, multiple} = pointRange;
        const multiplier = basePointValue * multiple;
        
        switch(true) {
            case (priceWithoutRest > from && (!to || priceWithoutRest <= to)):
                return points += (priceWithoutRest - from) * multiplier 
            case(priceWithoutRest > from && priceWithoutRest >= to):
                return points += (to - from) * multiplier 
            default:
             return points;
        } 
    }, 0);
}
