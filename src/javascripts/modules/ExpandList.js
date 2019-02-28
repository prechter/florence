import debounce from 'lodash.debounce'

export default class ExpandList {
  constructor(el) {
    this.el = el
    this.tagArray = Array.from(this.el.querySelectorAll('.tag-list__item'))
    this.btnArray = Array.from(this.el.querySelectorAll('.tag-list__btn'))

    this.bindEvents()
  }

  bindEvents() {
    this.btnArray.forEach(btn => btn.addEventListener('click', this.expand))
    window.addEventListener('resize', debounce(this.resize, 250))
  }

  //for expanding tag-list__items when clicking tag-list__btns
  expand = (e) => {
    let isExpanded = e.currentTarget.getAttribute('aria-expanded') === 'true'
    e.currentTarget.setAttribute('aria-expanded', !isExpanded)
    
    let btnIndex = this.btnArray.indexOf(e.currentTarget)
    this.tagArray[btnIndex].style.visibility = isExpanded ? 'hidden' : 'visible'
  }

  //for reverting all open or closed tags to visible when resizing browser window
  resize = () => {
    if (window.matchMedia('(max-width: 960px)').matches) {
      this.tagArray.forEach(tag => tag.style.visibility = 'visible')
    }
  }
}
