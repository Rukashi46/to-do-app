new Sortable(document.getElementById("task-list"),{
    animation:150
});
const add=document.querySelector("dialog");
const addTask=document.querySelector("dialog+button");
const closeButton=document.querySelector("dialog .close");
const taskAdd=document.querySelector("dialog .tasks");
const taskList=document.querySelector("#task-list");
const container=document.querySelector("#task-container");
const cList=document.querySelector("#class");
const compl=document.querySelector('h3');
function taskContainer(){ 
    const Totaltask=taskList.children.length+cList.children.length;
    container.style.display=Totaltask>0 ?'block':'none'; 
    compl.style.display= cList.children.length>0 ? 'block':'none';
}
taskContainer();
addTask.addEventListener("click",() =>{
    add.showModal();
});
taskAdd.addEventListener("click",() =>{
    const box=document.createElement("input");  
    const userTask=document.querySelector("#Add-Task").value;
    const strike=document.createElement("span");
    strike.textContent=userTask;
    const li=document.createElement("li");
    const removeBtn=document.createElement('button');
    removeBtn.type='button';
    removeBtn.textContent='Remove';
    removeBtn.classList.add('remove-btn')
    removeBtn.style.margin="10px";
    removeBtn.addEventListener("click",()=>{
        li.remove();
        taskContainer();
    });
    if (userTask.trim()){
    //alert("Task Added SuccesFully")
    box.type="checkbox";
    box.addEventListener("change",() =>{
        const cli=document.createElement("li");
        if(box.checked){
            strike.style.textDecoration="line-through";  
            strike.style.textDecorationColor="Red";
            cList.appendChild(li);
            taskContainer();
        }else{
            strike.style.textDecoration="none";
            taskList.appendChild(li);
        }
        taskContainer();
           
        });
    li.appendChild(box);
    li.appendChild(strike);
    li.appendChild(removeBtn);
    taskList.appendChild(li);
    const newInput=document.querySelector("#Add-Task");
    newInput.value="";
    taskContainer();
}
   else{
    alert("please Add Task")
    cList.style.display="none";
    compl.style.display="none";
   }
});
closeButton.addEventListener("click",() =>{
    add.close();
});
li.classList.add("fade-out");
    setTimeout(()=> li.remove(),300);