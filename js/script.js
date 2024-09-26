function bolder(){
    document.getElementById("text").style.fontWeight = "bold";
    console.log('bold');
}
function italic(){
    document.getElementById("text").style.fontStyle = "italic";
}
function alignRight(){
    document.getElementById("text").style.textAlign = "right";
}
function alignCenter(){
    document.getElementById("text").style.textAlign = "center";
}
function alignLeft(){
    document.getElementById("text").style.textAlign = "left";
}
function toUpper(){
    document.getElementById("text").style.textTransform = "uppercase";
}
function toLower(){
    document.getElementById("text").style.textTransform = "lowercase";
}
function capital(){
    document.getElementById("text").style.textTransform = "capitalize";
}
function clearText(){
    document.getElementById("text").value = '';
    console.log("clearText");
}
function changeColor(){
    const input = document.getElementById("color");
    document.getElementById("text").style.color = input.value;
    console.log(input.value);
}
function changeBgColor(){
    const input = document.getElementById("bg-color");
    document.getElementById("text").style.backgroundColor = input.value;
    console.log(input.value);
}
function changeFontSize(){
    const input = document.getElementById("font-size");
    document.getElementById("text").style.fontSize = input.value + 'px';
    console.log(input.value);
}
function changeFont(){
    const input = document.getElementById("fonts");
    document.getElementById("text").style.fontFamily = input.value;
    console.log(input.value);
}
function printText(){
    alert(document.getElementById("text").value);
}