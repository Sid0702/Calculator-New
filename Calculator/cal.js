function display(value){

    document.getElementById("screen").value;
}
function add(){
    var a = document.getElementById("number1").value;
    var b = document.getElementById("number2").value;
    var c = parseInt(a) + parseInt(b)
    document.getElementById("answer").value = c;
}