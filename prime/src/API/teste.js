var arr = [];
for (let i = 1; i <= 80; i++) {
    arr[i] = i;
    if(arr[i] % 3 == 0 && arr[i] % 5 == 0){
        console.log('yeop')
    }else if(arr[i] % 5 == 0){
            console.log('op')
    }else if(arr[i] % 3 == 0){
        console.log('ye')
    }
    
}
