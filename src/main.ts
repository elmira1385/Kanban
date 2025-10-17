import './style.css'
const showHiddenEl=document.getElementById("showHidden") as HTMLButtonElement
const moduleEl=document.getElementById("module") as HTMLDivElement
const mudulContantEl=document.getElementById("mudulContant") as HTMLDivElement
const titleEl=document.getElementById("titleEl") as HTMLInputElement
const DescriptionEl=document.getElementById("DescriptionEl") as HTMLInputElement
const StatusEl=document.getElementById("StatusEl") as HTMLInputElement
const addDiv=document.getElementById("addDiv") as HTMLInputElement
const todoEl=document.getElementById("todo") as HTMLDivElement
const DoingEl=document.getElementById("Doing") as HTMLDivElement
const DoneEl=document.getElementById("Done") as HTMLDivElement
const countAddDivEl=document.getElementById("countAddDiv") as HTMLSpanElement
const countAddDiv2El=document.getElementById("countAddDiv2") as HTMLSpanElement
const countAddDiv3El=document.getElementById("countAddDiv3") as HTMLSpanElement
let counter1=1
let counter2=1
let counter3=1

showHiddenEl.addEventListener("click",()=>{
moduleEl.classList.remove("hidden")
mudulContantEl.classList.remove("show")
})

moduleEl.addEventListener("click",()=>{
moduleEl.classList.add("hidden")
mudulContantEl.classList.add("show")
})

document.addEventListener("keydown",function(e){
  if(e.key==="Escape"){
moduleEl.classList.add("hidden")
mudulContantEl.classList.add("show")
}})

addDiv.addEventListener("click",()=>{
    const titleElInput=titleEl.value
    const DescriptionElInput=DescriptionEl.value
    const StatusElInput=StatusEl.value
    if(StatusElInput==="TODO"){
        counter1++
        countAddDivEl.textContent=String(counter1)
        todoEl.innerHTML+=
        `
        <section class="flex flex-col gap-4">
            <div class="flex flex-col bg-white p-5 shadow-md rounded-lg">
              <p class="text-sm font-bold">${titleElInput}</p>
              <span class="text-gray-400 p-2 text-xs font-bold"
                >${DescriptionElInput}</span
              >
            </div>
          </section>
        `
        
        
    }else if(StatusElInput==="DOING"){
        counter2++
        countAddDiv2El.textContent=String(counter2)
         DoingEl.innerHTML+=
        `
        <section class="flex flex-col gap-4">
            <div class="flex flex-col bg-white p-5 shadow-md rounded-lg">
              <p class="text-sm font-bold">${titleElInput}</p>
              <span class="text-gray-400 p-2 text-xs font-bold"
                >${DescriptionElInput}</span
              >
            </div>
          </section>
        `
    }else if(StatusElInput==="Done"){
         counter3++
        countAddDiv3El.textContent=String(counter3)
        DoneEl.innerHTML+=
         `
        <section class="flex flex-col gap-4">
            <div class="flex flex-col bg-white p-5 shadow-md rounded-lg">
              <p class="text-sm font-bold">${titleElInput}</p>
              <span class="text-gray-400 p-2 text-xs font-bold"
                >${DescriptionElInput}</span
              >
            </div>
          </section>
        `
    }
    titleEl.value=""
    DescriptionEl.value=""
    StatusEl.value=""
    moduleEl.classList.add("hidden")
    mudulContantEl.classList.add("show")
})




