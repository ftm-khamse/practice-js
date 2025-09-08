function largestNumIndex(arr){
   let max=arr[0];
   let index=0;
   arr.forEach((i ,idx) => {
    if(i>max){
        max=i;
        index=idx;
    }
   });
   console.log(index);
   
   
}
largestNumIndex([1,9,8,2,5,4,7]);