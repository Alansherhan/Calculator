function buttonclick(val)
{
   
    document.getElementById("screen").value=document.getElementById("screen").value+val;
    
    
}
function clearDisplay()
{
    document.getElementById("screen").value=""
}
function  equalClick()
{
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
} 
function BackButton(){
    var txt = document.getElementById("screen").value;
    txt = txt.slice(0,-1);
    document.getElementById("screen").value = txt;
}