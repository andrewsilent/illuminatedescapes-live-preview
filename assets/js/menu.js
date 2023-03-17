window.addEventListener('load', start)

function start () {
  const header = document.querySelector('.header')
  window.onscroll = () => {
    if (window.scrollY > window.innerHeight - header.clientHeight) {
      header.classList.add('scrolled')
    } else if (window.scrollY < window.innerHeight - header.clientHeight*2) {
      header.classList.remove('scrolled')
    }
  }



  const slider = document.querySelector('.variant-3 .faq-list');
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
    console.log(walk);
  });

}
