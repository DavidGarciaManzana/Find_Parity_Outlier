// You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
// The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer 
//Write a method that takes the array as an argument and returns this "outlier" N.



let findOutlier = (integers: number[]): number => {
    let oddMarker = 0;
    let evenMarker = 0;
    for (let i = 0; i < integers.length; i++) {
        //even
        if (integers[i] % 2 == 0) {
            // console.log(integers[i])
            evenMarker++
        } else { //odd 
            oddMarker++
        }
    }
    
    console.log('odd ' + oddMarker + 'even '+ evenMarker)
    return 1
}


console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])) //11 (the only odd number)
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21])) //160 (the only even number)

//1.- Do a for of the array to look if its mostly odd or even numbers   DONE
//2.- execute a function to return the number desired                   