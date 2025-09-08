function countBadData(arr){
    let num=0;
    arr.forEach(element => {
        if(typeof(element) !== 'number'){
            num++;
        }
    });
    console.log(num);
    
}

countBadData([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "L-B", "L-B"])