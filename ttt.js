let boxes = document.querySelectorAll(".box");
let rb = document.querySelector("#reset");
let ngb =document.querySelector("#re");
let mc = document.querySelector("#msg");
let mcm = document.querySelector(".msgcontent");

let turn = true;

const winp = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];

   


const dis = ()=> {
    for(let box of boxes) {
        box.disabled = true ;
       
    }

}
const enble = ()=> {
    for(let box of boxes) {
        box.disabled = false ;
        box.innerText="";
        
    }

}

boxes.forEach((box) =>{
    box.addEventListener("click",() => {
        if(turn==true) {
            box.innerText ="0";
            turn = false;
        }else{
            box.innerText ="X";
            turn = true;
        }
        box.disabled = true
       
        checkwinp()
       
    })
})
  const showwinner = (winner) =>{
    mc.innerText =`winner`
    mcm.classList.remove("hide");
    dis();
  }
const checkwinp = () => {
    for (pattern of winp){
        let post1 = boxes[pattern[0]].innerText;
        let post2 = boxes[pattern[1]].innerText;
       let post3 = boxes[pattern[2]].innerText;

    if(post1 != "" && post2 !="" && post3 !=""){
        if(post1===post2 && post2===post3) {
            console.log("winner")
            showwinner();
        }
    }
    }
}
const resetgmae = ()=> {
    turn =true;
   enble();
mcm.classList.add("hide")}
ngb.addEventListener("click",resetgmae);
rb.addEventListener("click",resetgmae);