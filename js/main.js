let array=[33,27,26,44,187,77,82,88,109,102,115,66,82,13,12];
console.log(array);
let b=0;
let c=0;
let even=[];
let odd=[];
for(i=0;i<array.length;i++){
    if(array[i]%2==0){
        
        even[b]=array[i];
        b++;
    }
    else{
        
        odd[c]=array[i];
        c++;
    }
}
console.log(even);
console.log(odd);
