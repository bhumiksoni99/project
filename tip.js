//custom function
function calculatetip()
{
    //store data of inputs
    var bill=document.getElementById("bill").value;
    var people=document.getElementById("people").value;
    var percent=document.getElementById("thisis").value;

    if(bill===""|| percent==0)
    {
        window.alert("add values to make it work");
        return;
    }
    if(people===""||people<=1)
    {
        people=1;
        document.getElementById("each").style.display="none";
    }
    else
    {
        document.getElementById("each").style.display="block";
    }
    //calculation
    var total = (bill*percent)/people;
    total= Math.round(total*10)/10;

    //display
    document.getElementById("totaltip").style.display="block"
    document.getElementById("tip").innerHTML=total;    
}


//makes the totaltip id part disappear
document.getElementById("totaltip").style.display="none";
document.getElementById("each").style.display="none";

//on clicking the calculate button function will be called
document.getElementById("umm").onclick = function()
{
    calculatetip();
};
