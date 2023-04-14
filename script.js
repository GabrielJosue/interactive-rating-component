let ratings = document.querySelectorAll('.raiting-number');
let buttonCta = document.querySelector('.cta-submit');
let raitingEl = document.querySelector('.raiting-component');
let thanksEl = document.querySelector('.thanks-component');
let selectedRating = document.querySelector('.heading-secondary');
let raitingSelected;
ratings.forEach( (raiting)=>{
    raiting.addEventListener('click',()=>{
        raiting.classList.toggle('active');
        raitingSelected = raiting.textContent;
        console.log(raitingSelected);
    })
    
})
// cta clic button
buttonCta.addEventListener('click',()=>{
    raitingEl.classList.add('d-none');
    thanksEl.classList.remove('d-none');
    selectedRating.textContent = `You Selected ${raitingSelected} out of 5`;
})
console.log(raitingSelected);
console.log(ratings);
console.log(buttonCta);
console.log(thanksEl);
console.log(raitingEl);