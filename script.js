 const colorpicker=document.getElementById("colorPicker");
 const canvascolor= document.getElementById("background")
const canvas=document.getElementById("canvas");
const clearButton=document.getElementById("clearButton");
const saveButton=document.getElementById("saveButton");
const retrieveButton=document.getElementById("retrieveButton");
const fontsize=document.getElementById("px");

const ctx=canvas.getContext('2d');
let isDrawing=false;
let lastX;
let lastY;

colorpicker.addEventListener("change",(e)=>{
    ctx.strokeStyle=e.target.value;
    ctx.fillStyle=e.target.value;
})

canvas.addEventListener("mousedown",(e)=>{
     isDrawing=true;
     lastX=event.offsetX;
      lastY=event.offsetY;
})

canvas.addEventListener("mousemove",(e)=>{
    ctx.beginPath();
    ctx.moveTo(lastX,lastY);
    ctx.lineTo(event.offsetX,event.offsetY);
    ctx.stroke();

    lastX=event.offsetX;
   lastY= event.offsetY;
})

canvas.addEventListener("mouseup",(e)=>{
    isDrawing=false;
})

canvascolor.addEventListener("change",(e)=>{
ctx.fillStyle=e.target.value;
ctx.fillRect(0,0,800,500);
})

fontsize.addEventListener("change",(e)=>{
    ctx.lineWidth=e.target.value;
})

clearButton.addEventListener("click",(e)=>{
    ctx.clearRect(0,0,canvas.width,canvas.height)
})

saveButton.addEventListener("click",(e)=>{
    localStorage.setItem('canvasContents',canvas.toDataURL());

    let link=document.createElement('a');
    link.download='my-canvas.png';
    link.href=canvas.toDataURL();
    link.click();
})

retrieveButton.addEventListener("click",(e)=>{
    let savedCanvas=localStorage.getItem("canvasContents");

    if(savedCanvas){
        let img=new Image();
        img.src=savedCanvas;
        ctx.drawImage(img,0,0);
        
    }
})



