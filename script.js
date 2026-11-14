let inp=document.querySelector("#inp");
let para=document.querySelector(".para");
inp.addEventListener("input",()=>{
   let total = inp.value.length;
   para.innerText = `Length Of Character : ${total}`;
})
