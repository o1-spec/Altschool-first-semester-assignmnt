const close = document.querySelector('.menu-closed');
const open = document.querySelector('.menu-open');
const navLinks = document.querySelector('.nav-links');
const header = document.querySelector('.headerr')
const navLink = document.querySelectorAll('.nav-link')

open.addEventListener('click',function(e){
    navLinks.classList.add('translate')
    open.classList.add('close')
    close.classList.remove('close')
})

navLink.forEach((nav) => {
    nav.addEventListener('click',function(e){
        navLinks.classList.remove('translate')
        close.classList.add('close')
        open.classList.remove('close')  
    })
})

close.addEventListener('click',function(e){
    navLinks.classList.remove('translate')
    close.classList.add('close')
    open.classList.remove('close')
})

const nav = document.querySelector('.navv')
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight)
const stickyNav = function(entries){
    const [entry] = entries

    if(!entry.isIntersecting){
        nav.classList.add('sticky')
    }else{
        nav.classList.remove('sticky')
    }
}

const obserer = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: '200px'
})

obserer.observe(header)

/*
const questionTag = Array.from(document.querySelectorAll('.question-tag'))
const questionHead = Array.from(document.querySelectorAll('.question-head span'))
const plus = Array.from(document.querySelectorAll('.plus'))
const minus = Array.from(document.querySelectorAll('.minus'))
//console.log(questionHead,plus,minus,questionTag)
*/

const questionTag = document.getElementsByClassName('question-tag');
const questionHead = document.getElementsByClassName('question-head');
const plus = document.getElementsByClassName('plus');
const minus = document.getElementsByClassName('minus');
const question = document.getElementsByClassName('question')

function handlePlusClick (btnindex){

}
let questions = Array.from(question)
let minuss = Array.from(minus)

questions.forEach(function(quest,i){
    quest.addEventListener('click',function(i){
        questions.forEach(function(quest){
            quest.classList.remove('active')
        })
        this.classList.add('active')
    })
})