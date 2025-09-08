function addToEven(arr){
    arr.forEach((item,index) => {
        if(item%2 !== 0){
           arr[index]=item+1;
        }
    });
    console.log(arr);
    
    
}
addToEven([1, 3, 5, 7, 9])