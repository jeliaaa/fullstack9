document.addEventListener('DOMContentLoaded', function(){
    const galleryImgs = document.querySelectorAll('.gallery-img');
    const popUpModal = document.getElementById("modal");
    const modalImg = document.querySelector('.modal-img');
    const closeBtn = document.querySelector('.close-btn');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');
    let currentImgIndex;

    
    galleryImgs.forEach((img,index) =>{
        img.addEventListener('click', function(){
            popUpModal.style.display = 'block';
            modalImg.src = img.src;
            currentImgIndex = index;
        });
    });
    
    closeBtn.addEventListener('click', ()=>{
        popUpModal.style.display = 'none';
    });
    
    function nextImg() {
        currentImgIndex++;
        if(currentImgIndex>=galleryImgs.length){
            currentImgIndex = 0;
        }
        modalImg.src = galleryImgs[currentImgIndex].src;
    };
    function prevImg() {
        currentImgIndex--;
        if(currentImgIndex<0){
            currentImgIndex = galleryImgs.length-1;
        }
        modalImg.src = galleryImgs[currentImgIndex].src;
    };

    nextBtn.addEventListener('click', nextImg);
    prevBtn.addEventListener('click', prevImg);
});