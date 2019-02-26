import { debounce } from 'utility/debounce'

export default class ExpandListItem {
  constructor(el) {
    this.el = el
    this.tag = el.parentNode
    this.el.addEventListener('click', this.expand)

    let resizeRate = debounce(this.resize, 250)
    window.addEventListener('resize', resizeRate)
  }

  expand = () => {
    let isExpanded = this.el.getAttribute('aria-expanded') === 'true'
    this.tag.style.visibility = isExpanded ? 'hidden' : 'visible'
    this.el.setAttribute('aria-expanded', !isExpanded)
  }

  //for reverting all open or closed tags to visible when resizing browser window
  resize = () => {
    if (window.matchMedia('(max-width: 960px)').matches) {
      this.tag.style.visibility = 'visible'
    }
  }
}

