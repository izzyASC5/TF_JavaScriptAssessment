function oddOneOut(arrOfInts){
    // Your code here!
    
        arrOfInts.push(arrOfInts);
        console.log(arrOfInts);
    let y =(arrOfInts.length);
        for (let i = 0; i <= arrOfInts.length; i++){
            let x = arrOfInts[i] %2 ;
            if(x === 1){
                console.log(arrOfInts[i] + ' is the first odd number');
                break
            }
            if (x !==1 && i ==y) {
                console.log('-1')
    
            }
    }
    }
    oddOneOut([12, 35, 13, 69, 101]);
    


// DON'T EDIT THE LINE BELOW THIS COMMENT
module.exports = oddOneOut;