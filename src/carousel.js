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
        color: rgba(0, 0, 0, 0.3);
        background-color: transparent;
        border: none;
        cursor: pointer;
        position: absolute;
        top: 50%;
      }
      .controls .next:hover, .controls .next:focus, .controls .previous:hover, .controls .previous:focus {
        color: rgba(0, 0, 0, 0.9);
      }
      .controls .next {
        right: 0;
      }
      .controls .previous {
        left: 0;
      }
      .indicators {
        display: flex;
        justify-content: center;
        list-style: none;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
      }
      .indicators button {
        font-family: monospace;
        font-size: 23px;
        color: rgba(0, 0, 0, 0.3);
        background-color: transparent;
        border: none;
        cursor: pointer;
      }
      .indicators button.active {
        color: rgba(0, 0, 0, 0.6);
      }
      .indicators button:hover {
        color: rgba(0, 0, 0, 0.9);
      }
    `
    this.initialize()
  }
  get slides() {
    return this.root.querySelectorAll('.slides section')
  }
  get indicators() {
    return this.root.querySelectorAll('.indicators button')
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
    // Indicators
    const indicators = document.createElement('ol')
    indicators.classList.add('indicators')
    for (const [index, slide] of this.slides.entries()) {
      const item = document.createElement('li')
      const button = document.createElement('button')
      button.textContent = '⦿'
      button.addEventListener('click', (event) => this.show(index))
      indicators.appendChild(item).appendChild(button)
    }
    this.root.append(indicators)
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
    // Indicators
    for (const button of this.indicators) {
      button.classList.remove('active')
    }
    this.indicators[this.index].classList.add('active')
  }
  static modulo(dividend, divisor) {
    return ((dividend % divisor) + divisor) % divisor
  }
}
