// You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
// The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer 
//Write a method that takes the array as an argument and returns this "outlier" N.



let findOutlier = (integers: number[]): number => {
    let oddMarker = 0;
    let evenMarker = 0;
    let lookingForEven = (arr: number[]) => {
        arr.forEach((int, index) => {
            if (integers[index] % 2 == 0) {
                evenMarker++
            } else {
                oddMarker++
            }
        })
        return evenMarker < oddMarker ? true : false
    }
    let findEven = (arr: number[]): number => {
        let result = 0;
        for (let element of arr) {
            if (element % 2 == 0) {
                result += element
            }
        }
        return result
    }
    let findOdd = (arr: number[]): number => {
        let result = 0;
        for (let element of arr) {
            if (element % 2 != 0) {
                result += element
            }
        }
        return result
    }

    
    if (lookingForEven(integers)) {
        return findEven(integers)

    } else {
        return findOdd(integers)

    }
}

// findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])
console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])) //11 (the only odd number)
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21])) //160 (the only even number)

//1.- Do a for of the array to look if its mostly odd or even numbers   DONE
//2.- execute a function to return the number desired                   