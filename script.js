function submit()
    {
    var nameInput = document.getElementById("name-input").value;
    var ageInput = document.getElementById("age-input").value;
      
    localStorage.setItem("nameInp",nameInput);
    localStorage.setItem("ageInp", ageInput);
   }

function next()
    {
    nameInput= localStorage.getItem("nameInp");
    ageInput= localStorage.getItem("ageInp");
    var table = document.getElementById("table-display");
    var row = table.insertRow(-1);
    var coloumn1 = row.insertCell(0);
    var coloumn2 = row.insertCell(1);
    var coloumn3 = row.insertCell(2);
    coloumn1.innerHTML = nameInput;
    coloumn2.innerHTML = ageInput;
    coloumn3.innerHTML= '<input type="button" value = "Check" onClick="checkIt()">';
   
}  


function checkIt()
    {   
    document.querySelector(".bg-modal").style.display ="block" ;
    
    nameInput = localStorage.getItem("nameInp");
    ageInput = localStorage.getItem("ageInp");
    const popUp = document.getElementById("pop-up");
    var ageVerify;
  
    if(ageInput>=18)
     {
       ageVerify ="an Adult";
     }

     else
     {
       ageVerify="a Child";
     }

var vowelNo=0;
var nameString =  nameInput;
var strLength = nameString.length;

for(i = 0; i<strLength ; i++)
    {
    if (nameString[i] == 'A'|| nameString[i] == 'a'||nameString[i] == 'E'|| nameString[i] == 'e'||nameString[i] == 'I'|| nameString[i] == 'i'||nameString[i] == 'O'|| nameString[i] == 'o'||nameString[i] == 'U'|| nameString[i] == 'u')
    vowelNo++;
    }
    
var message="The no of vowels is "+vowelNo+ " and he/she is " +ageVerify;
popUp.innerHTML=message;

document.querySelector('.close').addEventListener('click',function(){document.querySelector(".bg-modal").style.display ="none" ;   
});
}

