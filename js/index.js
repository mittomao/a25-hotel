

const cards = document.querySelectorAll(".wrapCard");

cards.forEach((card,i)=>{
    card.style.transition = `transform ${(i+1)/7}s`;
});