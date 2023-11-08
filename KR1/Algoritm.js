function findX(){
    var A=parseFloat(document.getElementById("A").value);
    var x;
    if (A>62){
        x=A**2+4+5;}
    else {
        x=1/(A**2) + 4*A + 5;
    }
    document.getElementById("answer").textContent=x
}
