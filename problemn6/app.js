function nthNumberFibonacci(n){
    let fibonacci =[0,1];
    for(let i=2 ;i<=n;i++){
        let answer=fibonacci[i-1] + fibonacci[i-2];
        fibonacci.push(answer)
    }
    console.log(fibonacci[n]);
    
    
}



nthNumberFibonacci(10);