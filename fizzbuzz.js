function fizzBuzz(start, end, skip){
    // Your code here!
   
    var list = [];
    let lowEnd = start;
    let highEnd = end;
    for (var i =lowEnd; i <= highEnd; i++) {
        list.push(i);
        console.log(list)
     let skipping = list.substr(i , skip)
     console.log(skipping)
     
 }
    }
    
    
 
 fizzBuzz(2,19,1)


// DON'T EDIT THE LINE BELOW THIS COMMENT
module.exports = fizzBuzz;