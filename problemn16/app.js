function area(a,b,c){
    let p = (a+b+c)/2;
    console.log(Math.sqrt(p*(p-a)*(p-b)*(p-c)));
}

// area(3,4,5);

function randomNumber(max,min){
    console.log(Math.floor(Math.random() * (max-min)) + min);
    
}
// randomNumber(14,2)

function evenOddChecker(num){
    (num%2)=== 0 ? console.log('Even'):console.log('Odd');
}

// evenOddChecker(3)

function findMinMax(arr){
  let max = 0 ;
  let min = arr[0];
  arr.forEach((num) =>{
    if(num >= max){
        max = num ;
    }
    else if(num <= min){
        min = num ;
    }
  });

  console.log(`Min:${min} , Max:${max}`);
  
}

// findMinMax([-1,2,-3,4,15 ,5,7])

function validParentheses(str){
    let answer = false;
    if(str.includes('(')){
        if(str.includes('()')){
            answer = true;
        }else{answer = false}
    }
    if(str.includes('[')){
        if(str.includes('[]')){
            answer = true;
        }else{answer = false}
    }
     if(str.includes('{')){
        if(str.includes('{}')){
            answer = true;
        }else{answer = false}
    }

    console.log(answer);
    
    
}

// validParentheses('()[]{}')

function circularArc(radius,theta){
    let r = radius;
    let deg = theta;
     let arc = (deg * (2*(Math.PI)*r))/360;
     console.log(arc.toFixed(3));
     
}

circularArc(2,30)