image=["image/image1.jpg","image/image2.jpg","image/image3.jpg","image/image4.jpg"]

let cnt=0;
function changeimg(){
    cnt=(cnt+1)%image.length;
    im=document.getElementById("pic")
    im.src=image[cnt]

}

function previousbtn(){
    cnt=(cnt-1+image.length)%image.length;
    im=document.getElementById("pic")
    im.src=image[cnt]
}