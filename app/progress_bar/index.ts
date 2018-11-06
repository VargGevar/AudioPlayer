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
    let duration = this.$music.duration
    let time = this.$music.currentTime
    this.bar.animate(0)
    if (this.active && duration > 0) {
      this.bar.animate(time/duration)
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

    $music.addEventListener('timeupdate', () => {
      this.animate()
    })

   

  }

}