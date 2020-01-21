function strClean(arrOfStrs){
    //Your code goes here
    arrOfStrs.push(arrOfStrs);
    console.log(arrOfStrs);
    for (let i = 0; i <= arrOfStrs.length; i++){
    let string = arrOfStrs[i];
    if (arrOfStrs[i] >=2 ){
    arrOfStrs.pop(i);
    }
    let tr =  string.trim();
    let res = tr.replace(/1/g, 'one');
    let zer = res.replace(/0/g,'zero');
    let str = zer.replace(/\s/g, "_" );
    console.log(str);
    
  }
}  

strClean([1,2, 3,4,5]);





// DO NOT EDIT THE LINE BELOW THIS
module.exports = strClean;