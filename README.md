# Carousel

## Usage

`index.html`

``` html
<!DOCTYPE html>
<html>
  <head>
    <script src="carousel.js"></script>
    <script src="script.js"></script>
  </head>
  <body>
    <div class="carousel">
      <div class="slides">
        <section>
          <figure>
            <video controls>
              <source src="01.mkv">
            </video>
            <figcaption>Video #1</figcaption>
          </figure>
        </section>
        <section>
          <figure>
            <video controls>
              <source src="02.mkv">
            </video>
            <figcaption>Video #2</figcaption>
          </figure>
        </section>
        <section>
          <figure>
            <video controls>
              <source src="03.mkv">
            </video>
            <figcaption>Video #3</figcaption>
          </figure>
        </section>
      </div>
    </div>
  </body>
</html>
```

`script.js`

``` javascript
const DOMContentLoaded = (event) => {
  for (const carousel of document.querySelectorAll('.carousel')) {
    new Carousel(carousel)
  }
}

document.addEventListener('DOMContentLoaded', DOMContentLoaded)
```
