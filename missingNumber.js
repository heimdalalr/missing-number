function missingNumber(numArr, maxNum) {
    let result = 0;
    let found = false;
    let checkNum = MaxNum;

    while(!found) {
        found =!numArr.includes(checkNum);
        if (found) {
            result = checkNum;
        }
        checkNum--;
    }
    return result;
}

console.log(missingNumber([3,4,5,9,8,7,6], 9))