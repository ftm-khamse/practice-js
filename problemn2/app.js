let s1= 'cs';
let s2 = 'cs';

if(s2.includes(s1)){console.log(true);}
else{
    let x = s2.split('');
    x.reverse();
    let result = x.join('')
    if(result.includes(s1)){console.log(true);
    }else{console.log(false);
    }  
}