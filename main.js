function countOccurances(arry){
    const count={}
    arry.forEach(element =>{
        count[element]=(count[element] || 0 )+1;
        
    })
    //  for (const element in count){
    //     (`${element} = ${count[element]}`);
    // }
    return count;
    
    

}

const words=countOccurances( ["lama","cow", "cat", "cow","monkey","lama"]);
var result=document.getElementById("result");
result.innerHTML=JSON.stringify(words);

