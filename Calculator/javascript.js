var displayVal = "";

function display(d){
    displayVal = displayVal + d;
    $("#result").val(displayVal );
    
}

function calculate(){
try{  
$("#result").val(eval(displayVal));
}

catch(err){
    $("#result").val("Error");
}
    
}
function clearField(){
    
    displayVal = "";
    $("#result").val(displayVal);
    
}

function squared(){
    $("#result").val(eval(displayVal + " * " + displayVal))
    
}

function divideByX(){
    $("#result").val(eval("1" + " / " + displayVal))
}