import { Favorite } from "./favourite";
import { Volume } from "./volume";
import { Controls } from "./controls";
import { Progress } from "./progress_bar";

class AudioPlayer {

  public $root: HTMLElement

  public $elem: HTMLElement = document.createElement('div');

  public favorite = new Favorite(this.$elem)

  public volume = new Volume(this.$elem)

  public music: HTMLAudioElement = new Audio('/assets/music.mp3')

  public controls = new Controls(this.$elem, this.music)

  public progress = new Progress(this.$elem)

  public style() {
    const $style = document.createElement('style')
    $style.innerHTML = `
      .audioplayer {
        margin: 0 auto;
        display: flex;
        max-width: 340px;
        width: 100%;
        height: 300px;
        justify-content: space-between;
        align-items: center;
        background: url('/assets/background.png');
        padding: 0 10px 0 10px;
        position: relative;
      }

      .audioplayer div:nth-of-type(1) { order: 1; }
      .audioplayer div:nth-of-type(2) { order: 3; }
      .audioplayer div:nth-of-type(3) { order: 2; }
      .audioplayer div:nth-of-type(4) { order: 2; }

      .controls {
        display: flex;
        max-width: 150px;
        width: 100%;
        height: 40px;
        justify-content: space-between;
        align-items: center;
        z-index: 10;
        background: #000;
        padding-left: 10px;
        padding-right: 10px;
        box-sizing: border-box;
      }

      i {
        width: 16px; 
        color: #ffffff;
      }

      .radial-progress {
        background-color: #d6dadc;
        width: 120px;
        height: 120px;
        border-radius: 50%;
      }

      .mask {
        clip: rect(0px,120px,120px,60px);
      }

      .mask {
        clip: rect(0px, 120px, 120px, 60px);
      }

      .mask .left {
        clip: rect(0px, 120px, 120px, 60px);
      }

      .mask .left .fill {
        clip: rect(0px, 60px, 120px, 0px);
      }

      .mask .right {
        clip: rect(0px, 60px, 120px, 0px);
      }

      .mask .right .fill {
        clip: rect(0px, 120px, 120px, 60px);
      }

      .circle .fill {
        position: absolute;
        background-color: #97a71d;
        width: 120px;
        height: 120px;
        transition: transform 1s;
        clip: rect(0px, 60px, 120px, 0px);
        border-radius: 50%;
      }
      
    `
    document.body.appendChild($style)
  }

  constructor($root: HTMLElement) {
    this.$root = $root
    this.$root.appendChild(this.$elem)
    this.$elem.classList.add('audioplayer')
    this.style()
  }












}
new AudioPlayer(document.body)

const $fontAwesome = document.createElement('link')
$fontAwesome.rel = 'stylesheet'
$fontAwesome.href = 'https://use.fontawesome.com/releases/v5.4.1/css/all.css'
if (document.head) document.head.appendChild($fontAwesome)
