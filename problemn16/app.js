function area(a,b,c){
    let p = (a+b+c)/2;
    console.log(Math.sqrt(p*(p-a)*(p-b)*(p-c)));
}

// area(3,4,5);

function randomNumber(max,min){
    console.log(Math.floor(Math.random() * (max-min)) + min);
    
}
randomNumber(14,2)