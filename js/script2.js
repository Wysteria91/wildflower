const track2 = document.querySelector('.track2');
const cards2 = document.querySelectorAll('.card2');
const dotsContainer2 = document.querySelector('.dots2');

let index = 0;

function cardsPerView(){
    if (window.innerWidth <= 600) return 1;
    if (window.innerWidth <= 900) return 2;
    return 3;
}
function maxIndex(){
    return cards2.length - cardsPerView();

}
function update(){
    const percent = 100/ cardsPerView();
    track2.style.transform = `translateX(-${index * percent}%)`;

    const dots2= document.querySelectorAll('.dots2 button');
    dots2.forEach(d=> d.classList.remove('active'));
    dots2[index]?.classList.add('active');

    cards2.forEach(card2 => card2.classList.remove('is-visible'));

    const start = index;
    const end = index + cardsPerView();

    for(let i = start; i< end; i++){
        cards2[i]?.classList.add('is-visible');
    }


}

function createDots(){
    dotsContainer2.innerHTML='';
    for(let i = 0; i<=maxIndex(); i++){
        const dot = document.createElement('button');
        if( i === 0)dot.classList.add('active');
        dot.addEventListener('click',()=>{
            index = i;
            update();
        })
        dotsContainer2.appendChild(dot);
    }
}
window.addEventListener('resize',()=>{
    index = Math.min(index, maxIndex());
    createDots();
    update();
});
createDots();
update();