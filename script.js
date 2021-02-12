import {gsap, Power3, Expo} from "gsap";


const select = (el) => document.querySelector(el);
const selectAll = (el) => document.querySelectorAll(el);

let tl = gsap.timeline({defaults: Power3.easeInOut})


tl.from(selectAll('h2 .line span'), {y: 160, duration: .8, stagger: {amount: 0.4}})
    .addLabel('start')
    .fromTo(select('.mask .inner'), {width: 0, autoAlpha: 0,}, {width: '100%', autoAlpha: 1, duration: .8}, 'start+=.7')
    .from(select('.upline'), {width: 0, duration: 4, delay: 2})
    .to(select('.mask .inner'), {width: 0, transformOrigin: 'right', duration: .2})
    .to(select('.upline'), {width: 0, transformOrigin: 'right', duration: .2, delay: -0.2})
    .from(select('.background-layer.black'), {width: 0, duration: .5}, 'start+=.7')
    .from(select('.background-layer.white'), {width: 0, duration: .5}, 'start+=1.1')
    .from(select('.background-layer.red'), {width: 0, duration: .5}, 'start+=1.3')
    .from(select('header'), {y: 60, opacity: 0, duration: .8}, 'start+=.7')
    .from(select('.section-img .wrapper'), {width: 0, duration: .8}, 'start+=1')


let tlIntro = gsap.timeline({defaults: {ease: Power3.easeInOut}})

tlIntro.from(selectAll('.overlay'), {yPercent: 100, duration: 1.3, stagger: {amount: .6}, transformOrigin: "top"})
    .to(selectAll('.overlay'), {
        yPercent: 0,
        height: 0, duration: 1.3, stagger: {amount: .6}, transformOrigin: "bottom"
    },)
    .addLabel('start2')
    .to('.overlay_container', {height: 0, opacity: 0}, 'start2')

let master = gsap.timeline();

master.add(tlIntro)
master.add(tl)

