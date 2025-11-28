// const a=document.querySelector(".main")
// const b=document.querySelector(".one")
// const c=document.querySelector(".two")
// function on(){
//     a.src="onn.gif";

//     b.textContent="light on ";
//     b.style.color="blue";
//     c.textContent="";
//     setTimeout(()=>{
   
//     off()
//   },3000);
  
   
// }

// function off(){
//     c.textContent="light off"
//     c.style.color="red"
//     a.src="off.gif";
//      b.textContent = "";
// }





// const a = document.querySelector(".main");
// const b = document.querySelector(".one");
// const c = document.querySelector(".two");

// function on() {
//   a.src = "on1.gif";
//   b.textContent = "Light On";
//   b.style.color = "blue";
//   c.textContent = "";
//   setTimeout(() => {
//     off();
//   }, 3000);
// }

// function off() {
//   a.src = "off1.gif"; // corrected "of.gif" to "off1.gif"
//   b.textContent = "";
//   c.textContent = "Light Off";
//   c.style.color = "red";
// }
const a=document.querySelector(".image")
const b=document.querySelector(".two")
const c=document.querySelector(".three")
function on(){
  a.src="onn.gif"
  b.innerHTML="light on"
  b.style.color="yellow"
  setTimeout(()=>{
   
    off()
  },3000)
  
}
function off(){
  a.src="off.gif";
  c.innerHTML="light off"
  c.style.color="blue"
 
    

}

