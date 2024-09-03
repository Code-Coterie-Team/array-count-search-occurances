function countOccurances(){
    let getInput=document.getElementById("array").value;
    let array=getInput.toLowerCase().split(" ");
    var result=document.getElementById("result");
    result.innerHTML="";
    const counts={}
    array.forEach(element =>{
        counts[element]=(counts[element] || 0 )+1;
        
    })
    
    for ( const [word,count] of Object.entries(counts)){
    const objDiv=document.createElement('div');
    objDiv.textContent=` ${word} : ${count}`;
    result.appendChild(objDiv);
    }

}




