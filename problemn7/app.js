function starPattern(n){
    let stars=[];
    let star='*';
    for(let i=1;i<=n;i++){
        stars.push(star);
        x=stars.join('');
        console.log(x);
  
    }
}
starPattern(5);
