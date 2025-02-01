const task=document.querySelector("input");
const ul=document.querySelector("ul");
const listitems=document.querySelectorAll('li');


function addTask(){
if(task.value===""){
    alert("Enter something!");
    
}
else{
let li=document.createElement("li");
li.innerHTML=task.value;
ul.appendChild(li);
let span=document.createElement("span");
span.innerHTML="\u00d7";
li.appendChild(span)
}
task.value="";
saveData();

}
ul.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
e.target.parentElement.remove(); 
saveData();

    }
},false);

function saveData(){
    localStorage.setItem("data",ul.innerHTML);
}
function showData(){
   ul.innerHTML= localStorage.getItem("data");
}
showData();

addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  });
  