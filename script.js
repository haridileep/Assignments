function subFunction()
{
    var nI = document.getElementById("name-input").value;
    var aI = document.getElementById("age-input").value;
      
    localStorage.setItem("nameInp",nI);
    localStorage.setItem("ageInp", aI);
   
    
}

function next()
{
   
    nameInput= localStorage.getItem("nameInp");
    ageInput= localStorage.getItem("ageInp");
 

    
    var ttable = document.getElementById("table-display");
    
    var row = ttable.insertRow(-1);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = nameInput;
    cell2.innerHTML = ageInput;
    cell3.innerHTML= '<input type="button" value = "Check" onClick="checkIt()">';
   
}  


function checkIt()
{   
    
    document.querySelector(".bg-modal").style.display ="block" ;
    
    nameInput= localStorage.getItem("nameInp");
    ageInput= localStorage.getItem("ageInp");
    const vO = document.getElementById("pop-up");
   
  
    
    var ag;
   if(ageInput>=18)
   {
       ag ="an Adult";
   }

     else{
     ag="a Child";
   }

var vow=0;
var str =  nameInput;
var n=str.length;
for(i=0;i<n;i++)
{
  if (str[i]=='A'|| str[i]=='a'||str[i]=='E'|| str[i]=='e'||str[i]=='I'|| str[i]=='i'||str[i]=='O'|| str[i]=='o'||str[i]=='U'|| str[i]=='u')
  vow++;

}
var vowe="The no of vowels is "+vow+ " and he/she is " +ag;
vO.innerHTML=vowe;

document.querySelector('.close').addEventListener('click',function(){document.querySelector(".bg-modal").style.display ="none" ;   
});
}

