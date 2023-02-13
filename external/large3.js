function large()
{
var n1;
var n2;
var n3;
n1=parseInt(document.getElementById("n1").value);
n2=parseInt(document.getElementById("n2").value);
n3=parseInt(document.getElementById("n3").value);
if(n1>n2&&n2>n3)
{
document.write(n1+"is greater");
}
else if(n2>n1&&n2>n3)
{
document.write(n2+"is greater");
}
else{
document.write(n3+"is greater");
}
}