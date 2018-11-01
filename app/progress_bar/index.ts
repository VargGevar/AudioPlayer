import { Circle } from "progressbar.js";

export class ProgressBar {

  public $root: HTMLElement

  public $elem: HTMLElement = document.createElement('div');

  public bar = new Circle(this.$elem, {
    strokeWidth: 5,
    easing: 'easeInOut',
    duration: 1400,
    color: '#007cce',
    trailColor: '#000',
    trailWidth: 5,
    svgStyle: null
  });


  constructor($root: HTMLElement) {
    this.$root = $root
    this.$root.appendChild(this.$elem)
    this.$elem.id = 'container'

    this.bar.animate(1.0);

  }

}