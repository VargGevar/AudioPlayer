import { Circle } from "progressbar.js";

export class ProgressBar {

  public $root: HTMLElement

  public $elem: HTMLElement = document.createElement('div');

  public active: boolean = false

  public $music: HTMLAudioElement


  public bar = new Circle(this.$elem, {
    strokeWidth: 5,
    easing: 'easeInOut',
    duration: 0,
    color: '#007cce',
    trailColor: '#000',
    trailWidth: 5,
    svgStyle: null

  });

  public animate() {
    this.active = !this.active
    if (this.active) {
      this.bar.animate(1.0, {
        duration: 2000
      });
    }
    else {
      this.bar.stop()
    }
  }



  constructor($root: HTMLElement, $music: HTMLAudioElement) {
    this.$root = $root
    this.$music = $music
    this.$root.appendChild(this.$elem)
    this.$elem.id = 'container'

    this.animate()

  }

}