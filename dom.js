let inc=document.querySelector("#inc")

let dec=document.querySelector("#dec")

let reset=document.querySelector("#reset")

let num=document.querySelector("#num")



inc.addEventListener("click",()=>{
 
  num.innerText ++
  if(num.innerText>0){
    num.style.color="green"
  }
})

dec.addEventListener('click',()=>{
num.innerText --
if(num.innerText < 0){
    
 num.style.color="red"
}

} )

reset.addEventListener("click",()=>{


 num.innerText=0
num.style.color="black"


})

