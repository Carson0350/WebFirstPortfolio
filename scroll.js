
gsap.registerPlugin(ScrollTrigger);

let t1 = gsap.timeline()

gsap.to('.header', {
  transform: 'translateY(-5px)',
  boxShadow: '0 2rem 3.5rem 0 rgba(0,0,0,.5)',
  scrollTrigger: {
    scrub: true,
    trigger: '.break',
    start: 30,
    end: 'top 60%',
  }
})

gsap.from('.section-about__heading-secondary', {
  opacity: 0,
  scale: 0.5,
  y: -70,
  scrollTrigger: {
    scrub: true,
    markers: true,
    trigger: '.p1',
  }
})

gsap.from('.section-about__heading-tertiary', {
  opacity: 0,
  scale: 0,
  y: -100,
  duration: 2.5,
  scrollTrigger: {
    scrub: true,
    trigger: '.p1',
  }
})

gsap.from('.p1', {
  duration: 1.25,
  opacity: 0,
  scale: 0.5,
  ease: 'back',
  scrollTrigger: {
    trigger: '.break2',
    scrub: true,
  }
})

gsap.from('.p2', {
  duration: 1.25,
  opacity: 0,
  scale: 0.5,
  ease: 'back',
  scrollTrigger: {
    trigger: '.break2',
    scrub: true,
  }
})








// .from('.p2', {duration: 3, opacity: 0, scale: 0.5, y: -500})
// .from('.p3', {duration: 3, opacity: 0, scale: 0.5, y: -200})