function objectToArray(obj){
    let array = [];
    for(const key in obj){
        let arr = [key,obj[key]];
        array.push(arr);
    }
    console.log(array);
    
}

// we can use Object.entries(obj) thats a simple and clear way

objectToArray({
    name:"fatemeh",
    address:'tehran',
    age:'28'
})