import { Circle } from "progressbar.js";

export class ProgressBar {

  public $root: HTMLElement

  public $elem: HTMLElement = document.createElement('div');

  public bar = new Circle(this.$elem, {
    strokeWidth: 6,
    easing: 'easeInOut',
    duration: 1400,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: null
  });


  constructor($root: HTMLElement) {
    this.$root = $root
    this.$root.appendChild(this.$elem)
    this.$elem.id = 'container'

    this.bar.animate(1.0);

  }

}