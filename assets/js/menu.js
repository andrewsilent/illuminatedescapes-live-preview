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
    e.preventDefault()
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

  const items = document.querySelectorAll('.variant-6 .item')
  const numbers = document.querySelectorAll('.variant-6 .number-wrapper')
  const labels = document.querySelectorAll('.variant-6 .label')
  const selector = document.createElement('div')
  selector.classList.add('selector')
  document.querySelector('.variant-6 .list').appendChild(selector)
  const pseudo = window.getComputedStyle(selector, ':before')
  const height = parseInt(pseudo.height)

  const onItemClick = (e, i) => {
    selector.style.opacity = 1
    selector.style.top = `${items[i].offsetTop + e.offsetHeight/2 - height/2}px`
    selector.style.left = `${items[i].offsetLeft+e.offsetWidth+numbers[i].offsetLeft+numbers[i].offsetWidth}px`
  }

  labels.forEach((e, i) => {
    e.addEventListener('click', () => onItemClick(e, i))
    // onItemClick(labels[0], 0)
  })

}
