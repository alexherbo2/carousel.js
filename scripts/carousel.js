class Carousel {
  constructor(root) {
    this.root = root
    this.state = {
      index: 0
    }
    this.style = `
      .controls .next, .controls .previous {
        font-family: monospace;
        font-size: 23px;
        color: black;
        background-color: transparent;
        border: none;
        cursor: pointer;
        position: absolute;
        top: 50%;
      }
      .controls .next:hover, .controls .previous:hover {
        color: gray;
      }
      .controls .next {
        right: 0;
      }
      .controls .previous {
        left: 0;
      }
    `
    this.initialize()
  }
  get slides() {
    return this.root.querySelectorAll('.slides section')
  }
  get index() {
    return this.state.index
  }
  set index(value) {
    this.state.index = Carousel.modulo(value, this.slides.length)
  }
  initialize() {
    this.root.style.position = 'relative'
    // Controls
    const controls = document.createElement('div')
    controls.classList.add('controls')
    this.root.append(controls)
    // Next
    const next = document.createElement('button')
    next.classList.add('next')
    next.textContent = '❱'
    next.title = 'Next'
    next.addEventListener('click', (event) => this.show(this.index + 1))
    controls.append(next)
    // Previous
    const previous = document.createElement('button')
    previous.classList.add('previous')
    previous.textContent = '❰'
    previous.title = 'Previous'
    previous.addEventListener('click', (event) => this.show(this.index - 1))
    controls.append(previous)
    // Style
    const style = document.createElement('style')
    style.textContent = this.style
    this.root.append(style)
    // Show
    this.show(0)
  }
  show(index) {
    this.index = index
    for (const slide of this.slides) {
      slide.style.display = 'none'
    }
    this.slides[this.index].style.display = 'unset'
  }
  static modulo(dividend, divisor) {
    return ((dividend % divisor) + divisor) % divisor
  }
}
