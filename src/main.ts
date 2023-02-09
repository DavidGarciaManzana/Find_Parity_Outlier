const findOutlier = (integers: number[]): number => {
    let oddMarker: number = 0;
    let evenMarker: number = 0;
    const lookingForEven = (arr: number[]) => {
        arr.forEach((int,index: number) => {
            if (integers[index] % 2 == 0) {
                evenMarker++
            } else {
                oddMarker++
            };
        });
        return evenMarker < oddMarker ? true : false;
    };

    const findEven = (arr: number[]): number => {
        let evenNumber: number = 0;
        for (let element of arr) {
            if (element % 2 == 0) {
                evenNumber += element
            };
        };
        return evenNumber;
    };
    const findOdd = (arr: number[]): number => {
        let oddNumber: number = 0;
        for (let element of arr) {
            if (element % 2 != 0) {
                oddNumber += element
            };
        };
        return oddNumber;
    };


    if (lookingForEven(integers)) {
        return findEven(integers);
    } else {
        return findOdd(integers);
    }
}


// console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])) //11 (the only odd number)
// console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21])) //160 (the only even number)
