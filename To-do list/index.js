const item=document.querySelector("#item")
const todo=document.querySelector("#lists")
const btn=document.querySelector("#addbtn")

item.addEventListener(
    "keyup",
    function(event){
         if(event.key=="Enter"){
            addtask(this.value)
            this.value=""
         }
    } 

)





const addtask= (item) =>{
    const listitem=document.createElement("li");
    listitem.innerHTML=`
     ${item}
    <i class="fa fa-times i1" aria-hidden="true" title="Delete"></i>
    <i class="fa fa-check i2" title="Completed"></i>
    <time

    `
    ;

    listitem.querySelector(".i2").addEventListener(
        "click",
        function(){
            listitem.classList.toggle("done");
        }

    )
    listitem.querySelector(".i1").addEventListener(
        "click",
        function(){
            listitem.remove()
        }
    )
    todo.appendChild(listitem)
}

setInterval(updateTime,1000);

    function updateTime(){
        time.innerHTML= new Date();
    }
