var container = document.getElementById("array");

function generateArray(){
    for(var i =  0;i < 15; i++){
        var value = Math.ceil(Math.random() * 100);
        var array_ele = document.createElement("div");

        array_ele.classList.add("block");

        array_ele.style.height = `50px`;
        array_ele.style.transform =`translate(${i * 10}px)`;

        var array_ele_label = document.createElement("label");
        array_ele_label.classList.add("block_id");
        array_ele_label.innerText = value;

        array_ele.appendChild(array_ele_label);
        container.appendChild(array_ele);
    }
}


function swap(el1, el2){
    return new Promise((resolve) => {
        var temp = el1.style.transform;
        el1.style.transform = el2.style.transform;
        el2.style.transform = temp;

        window.requestAnimationFrame( function (){
            setTimeout(() =>{
                container.insertBefore(el2, el1);
                resolve();
              },250);  
            });
        });
    }


async function BubbleSort(delay = 400){
    var blocks = document.querySelectorAll(".block");

    for(var i=0; i<blocks.length;i+=1){
        for(var j=0;j<blocks.length-i-1;j++){
            blocks[j].style.backgroundColor = "#FF4949";
            blocks[j+1].style.backgroundColor = "#FF4949";


        await new Promise((resolve) => {
            setTimeout(() => {
                resolve(); 
            }, delay);
          });


          var value1 = Number(blocks[j].childNodes[0].innerHTML);
          var value2 = Number(blocks[j+1].childNodes[0].innerHTML);

          if(value1 > value2){
            await swap(blocks[j], blocks[j+1]);
            blocks = document.querySelectorAll(".block");
          }
          blocks[j].style.backgroundColor = "#6b5b95";
          blocks[j + 1].style.backgroundColor = "#6b5b95";
        }

        blocks[blocks.length - i -1].style.backgroundColor = "#13CE66";

    }
}



generateArray();

BubbleSort();




const menuBtn = document.querySelector(".menu-icon span");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");
const form = document.querySelector("form");
const array = document.getElementById("array");


menuBtn.onclick = () => {
    items.classList.add("active");
    menuBtn.classList.add("hide");
    searchBtn.classList.add("hide");
    cancelBtn.classList.add("show");
    array.classList.add("hide"); // hide the array
}

cancelBtn.onclick = () => {
    items.classList.remove("active");
    menuBtn.classList.remove("hide");
    searchBtn.classList.remove("hide");
    cancelBtn.classList.remove("show");
    form.classList.remove("active");
    array.classList.remove("hide"); // show the array again

}

searchBtn.onclick = () => {
    form.classList.add("active");
    searchBtn.classList.add("hide");
    cancelBtn.classList.add("show");
}

