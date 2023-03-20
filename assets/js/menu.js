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

  const v6items = document.querySelectorAll('.variant-6 .faq-item')
  const v6descriptions = document.querySelectorAll('.variant-6 .description-item')
  const itemSelector = document.createElement('div')
  itemSelector.classList.add('selected-item')
  document.querySelector('.variant-6 .faq-list').appendChild(itemSelector)
  const descriptionSelector = document.createElement('div')
  descriptionSelector.classList.add('selected-description')
  document.querySelector('.variant-6 .faq-list').appendChild(descriptionSelector)

  const setSelector = (e) => {
    e.classList.add('active')
    itemSelector.style.top = `${e.offsetTop+e.offsetHeight/2}px`
  }

  const setDescriptor = (e, i) => {
    v6descriptions[i].style.top = `${e.offsetTop+e.offsetHeight/2 - v6descriptions[i].offsetHeight/2}px`
    v6descriptions[i].classList.add('active')
  }

  const onFaqItemClick = (e, i) => {
    faqItemsClear()
    setSelector(e)
    setDescriptor(e, i)
  }

  const faqItemsClear = () => {
    v6items.forEach((e, i) => {
      e.classList.remove('active')
      v6descriptions[i].classList.remove('active')
    })
  }

  v6items.forEach((e, i) => {
    e.addEventListener('click', () => onFaqItemClick(e, i))
    setSelector(v6items[0])
    setDescriptor(v6items[0], 0)
  })

}
