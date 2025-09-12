function ageSumObjects(obj){
    let sum=0;
    for (const user of obj) {
        sum+=user.age;
        
    }
    console.log(sum);
    
}

ageSumObjects([{name:'ftm',age:28},{name:'ali',age:34},{name:'kaveh',age:5}])