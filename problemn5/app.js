function isJavaScriptFile(arr){
    let answer = [];
    arr.forEach((item,index) => {
        if(item.includes('.js')){
            answer[index]=true;
        }else{
            answer[index]=false;
        }
        
    });
    console.log(answer);
}

isJavaScriptFile(['as.js','bb.html','app.js','js.html','style.css']);