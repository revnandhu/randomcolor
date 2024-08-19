let colors=document.querySelector("span");
let btn=document.getElementById("btn");
let box=document.querySelector(".box");



btn.addEventListener("click",function(){
    let ulList=document.getElementById("ulList");
    let liList=document.createElement("li");
    liList.classList.add("liList");
    ulList.appendChild(liList);

    let arr=[0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
    let hexColor="#";
    for(let i=0;i<6;i++){ 
        hexColor=hexColor+arr[Math.floor(Math.random()*15)];
        console.log(hexColor)

    }
    console.log(hexColor);
    box.style.backgroundColor=hexColor;
    colors.innerText=hexColor;
    liList.innerText=hexColor;
    

});

ulList.addEventListener("click",function(e){
    console.log(e.target);
    // e.target.toggle();
    // liList2.target.toggle();
     e.target.remove("li");
});

