
function HtmlElement() {
  this.click = function() {
    console.log('clicked')
  }
}

HtmlElement.prototype.focus = function() {
  console.log('focused')
}

function HtmlSelectElement(items = []) {
  this.items = items;

  this.addItem = function(item) {
    this.items.push(item);
  }

  this.removeItem = function(item) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  this.render = function() {
    return document.write(`
    <select>${this.items.map(item =>
      `<option>${item}</option>`).join('')}
    </select>`);
  }
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlElement;

function HtmlImageElement(src) {
  this.src = src;

  this.render = function() {
    return document.write(`<img src="${this.src}" alt="" />`);
  }
}
HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;

const e = new HtmlElement();
const s = new HtmlSelectElement([1, 3, 6]);
const img = new HtmlImageElement('https://res.cloudinary.com/iambeejayayo/image/upload/v1547954566/fav-500.png');

// run img.render() in console to load image
