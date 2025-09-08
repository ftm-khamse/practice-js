function reverseArray(arr){
    // console.log(arr.reverse()); best way!
    let reverse = [];
    for(let i=arr.length-1;i>=0;i--){
        reverse.push(arr[i]);
    }
    console.log(reverse);
    
}
reverseArray([1,2,3])