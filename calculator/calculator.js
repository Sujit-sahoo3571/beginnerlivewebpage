let outputscreen = document.getElementById( 'output-screen');
const formatting = Intl.NumberFormat('en');
let cal = document.getElementById('cal');

function displaysign(num){
    
    outputscreen.value = outputscreen.value.split(',').join('');
    let index1 =   outputscreen.value.length -1 ;
    let sign1 = outputscreen.value.charAt(index1);
          
    if(sign1 == "%" ||sign1 == "/" ||sign1 == "*" ||sign1 == "+" ||sign1 == "-"  ){
               outputscreen.value = outputscreen.value.slice(0,-1);
           }
           outputscreen.value += num;        
   
}

function display(num){
    outputscreen.value = outputscreen.value.split(',').join('');
    outputscreen.value += num; 
}

function Clear(){
    outputscreen.value = '';
}

function calculate(){
    try{
        outputscreen.value = eval(outputscreen.value);
        outputscreen.value = formatting.format(outputscreen.value);

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

function changeTheme(){

    const color1 = ['#ffbf00' ,'#ffff00', '#bfff00', '#40ff00','#00ffff','#0080ff','#0000ff', '#8000ff', '#ff00bf','#ff0040' ];
    let ind1 = Math.floor(Math.random() * 10);
    let ind2 = Math.floor(Math.random() * 10);
    console.log(ind1, ind2);

    cal.style.backgroundColor = color1[ind1];
    document.body.style.backgroundColor = color1[ind2]

}