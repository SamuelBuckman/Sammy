let ratingStarInput = [...document.querySelectorAll('.rstar')];

ratingStarInput.map((star, index) => {
    star.addEventListener('click',() =>{
        for(let i = 0; i < 5; i++){
            if(i <= index){
                ratingStarInput[i].src = '/img/star.jpg';
            }else{
                ratingStarInput[i].src = '/img/wstar1.png';
            }
        }
    })
})


