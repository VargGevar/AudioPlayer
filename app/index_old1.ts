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

      .progress_wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        width: 168px;
        height: 168px;
        right: 50%;
        left: calc(50% - 84px);
        background-color: rgba(0, 0, 0, 1);
        border-radius: 50%;
      }

      .label {
        width: 150px;
        height: 150px;
        background: url('/assets/cover.png');
        top: calc(50% - 75px);
        left: calc(50% - 75px);
        background-position: 50% 50%;
        z-index: 5;
      }

      .left-side {
        position: absolute;
        transform: rotate(270deg);
        border-color: #8e44ad;
        height: 100%;
        width: 100%;
        border-radius: 50%;
        background: -moz-linear-gradient(90deg, #0074be 0%, #0095fd 100%);
        background: linear-gradient(0deg, #0074be 0%, #0095fd 100%);
        
      }
      
      .progress {
        position: absolute;
        top: calc(50% - 84px);
        left: calc(50% - 84px);
        width: 168px;
        height: 168px;
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
