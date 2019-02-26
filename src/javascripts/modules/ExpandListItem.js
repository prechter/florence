export default class ExpandListItem {
  constructor(el) {
    this.el = el
    this.tag = el.parentNode
    this.el.addEventListener('click', this.expand )
  }

  expand = () => {
    let pressed = this.el.getAttribute('aria-pressed') === 'true'
    if (this.tag.style.visibility === 'visible') {
      this.tag.style.visibility = 'hidden'
      this.el.setAttribute('aria-pressed', String('false'))
    } else {
      this.tag.style.visibility = 'visible'
      this.el.setAttribute('aria-pressed', String(!pressed))
    }
  }
}

