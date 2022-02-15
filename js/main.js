let title = document.querySelector('title').innerHTML;
// console.log(a)
let c = document.querySelector('.submit')
let door = document.querySelector('.openwin');
let closedoor = document.querySelector('.closewin')
let closedoortoo = document.querySelector('.submit')
let currpic = 0;
let dotlist = document.querySelectorAll('.dot')
let carsimg = ['https://clck.ru/bNHLs','https://clck.ru/bNHMi','https://clck.ru/bNHNL']
let nextbutton = document.querySelector('.nextpic')
let prevbutton = document.querySelector('.prevpic')
let slidepic = document.getElementById('slidepic')
let doorfunc = function(){
    let a = document.querySelector('.modalwin');
    a.classList.toggle('displaynone')
}
let dots = document.querySelector('.dots');
door.addEventListener('click', doorfunc);
closedoor.addEventListener('click', doorfunc);

let modelauto = document.querySelector('.model')
modelauto.value = title;

let changepic = function(){
    if(currpic>2){
        currpic = 0;
    }
    if(currpic<0){
        currpic = 2;
    }
    slidepic.src=carsimg[currpic];
    dots.children[0].classList.remove('activedot')
    dots.children[1].classList.remove('activedot')
    dots.children[2].classList.remove('activedot')
    dots.children[currpic].classList.add('activedot')
}

let pluspic = function(){
    currpic+=1;
    changepic()
}

let minuspic = function(){
    currpic-=1;
    changepic()
}

c.addEventListener('click',()=>{
    let a = document.getElementById('form');
    let b = new FormData(a)
    b = Array.from(b);
    b.forEach((item)=>{
        localStorage.setItem(item[0],item[1])
    })
})

closedoortoo.addEventListener('click', doorfunc);
nextbutton.addEventListener('click',pluspic);
prevbutton.addEventListener('click',minuspic);

changepic()

setInterval(pluspic,3500);

let activedot = function(e){
    currpic = e.target.title;
    console.log(currpic)
    changepic()
}



dots.addEventListener('click',(e)=>{
    dotmassive = Array.from(dotlist)
    dotmassive.forEach((item) => {
        item.classList.remove('activedot')
    })
    if(e.target.className!='dots'){
        e.target.classList.toggle('activedot')
        currpic = e.target.title;
        console.log(currpic)
        changepic()
        console.log(e.target)
    }
})
console.log(dots.children[0])

