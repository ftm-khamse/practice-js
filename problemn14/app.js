function stringCheck(arr){
    let firstString = arr[0].toLowerCase();
    let secondString = arr[1].toLowerCase().split('');
    let bol = true
    secondString.forEach(letter => {
        if(!firstString.includes(letter)){
            bol = false ;
            
        }
        return ;

    });

    console.log(bol);
    

    
}

stringCheck(['wezp','juy']);