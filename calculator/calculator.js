let outputscreen = document.getElementById( 'output-screen');

function displaysign(num){
    
    
    let index1 =   outputscreen.value.length -1 ;
    let sign1 = outputscreen.value.charAt(index1);
          
    if(sign1 == "%" ||sign1 == "/" ||sign1 == "*" ||sign1 == "+" ||sign1 == "-"  ){
               outputscreen.value = outputscreen.value.slice(0,-1);
           }
           outputscreen.value += num;        
   
}

function display(num){
    outputscreen.value += num; 
}

function Clear(){
    outputscreen.value = '';
}

function calculate(){
    try{
        outputscreen.value = eval(outputscreen.value);

    }
    catch(err){
        alert("Invalid Input!");
    }
}

function del(){
    outputscreen.value = outputscreen.value.slice(0,-1);
}

function prev(num){
  let index1 =   outputscreen.value.length -1 ;
    let sign1 = outputscreen.value.charAt(index1);
            console.log(isSign);
            outputscreen.value += num;      
        
}