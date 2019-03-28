
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
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlElement;

const e = new HtmlElement();
const s = new HtmlSelectElement([1, 3, 6]);
