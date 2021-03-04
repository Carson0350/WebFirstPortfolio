// gsap.from('.section-about__heading-secondary', {opacity: 0})
// gsap.to('.section-about__heading-secondary', {duration: 3, opacity: 1})

// import { render } from "node-sass";

// gsap.from('.p1', { y: -300, opacity: 0 })
// gsap.to('.p1', {duration: 3, opacity: 1})

// gsap.from('.p2', { left: 300, opacity: 0 })
// gsap.to('.p2', {duration: 3, opacity: 1})

// gsap.from('.p3', { left: 300, opacity: 0 })
// gsap.to('.p3', {duration: 3, opacity: 1})

// gsap.from('.about', { y: -300, opacity: 0, zIndex: '-1' })
// gsap.to('.about', {duration: 5, opacity: 1, zIndex: "-1"})

gsap.registerPlugin(ScrollTrigger);

let t1 = gsap.timeline()

gsap.to('.header', {
  scrollTrigger: '.break',
  duration: 2,
  transform: 'translateY(-5px)',
  boxShadow: '0 5rem 5rem 0 rgba(0,0,0,.5)',
})

gsap.from('.header', {
  duration: 3,
  scrollTrigger: '.p1',
  boxShadow: '0 2.5rem 2.5rem 0 rgba(0,0,0,.5)'
})

gsap.from('.section-about__heading-secondary', {
  scrollTrigger: '.section-about__main',
  opacity: 0,
  delay: 1.2,
  duration: 2,
  zIndex: '-1',
  scale: 0.25,
  y: -150,
})

gsap.from('.p1', {
  scrollTrigger: '.p2',
  duration: 1.25,
  opacity: 0,
  scale: 0.5,
  ease: 'back',
})

gsap.from('.p2', {
  scrollTrigger: '.break2',
  duration: 1.25,
  opacity: 0,
  scale: 0.5,
  ease: 'back',
})








// .from('.p2', {duration: 3, opacity: 0, scale: 0.5, y: -500})
// .from('.p3', {duration: 3, opacity: 0, scale: 0.5, y: -200})