import SmoothScroll from 'smooth-scroll'

export default class SmoothScrollLink {
  constructor(el) {
    this.el = el
    this.href = this.el.getAttribute('href')
    this.target = document.querySelector(this.href)
    this.smooth = new SmoothScroll()
    this.el.addEventListener('click', this.scroll)
  }
  
  scroll = () => {
    this.smooth.animateScroll(this.target)
  }
}
