import { Favorite } from "./favourite";
import { Volume } from "./volume";
import { Controls } from "./controls";
import { ProgressBar } from "./progress_bar";

class AudioPlayer {

  public $root: HTMLElement

  public $elem: HTMLElement = document.createElement('div');

  public favorite = new Favorite(this.$elem)

  public music: HTMLAudioElement = new Audio('/assets/music.mp3')

  public volume = new Volume(this.$elem, this.music)

  public controls = new Controls(this.$elem, this.music)

  public progressbar = new ProgressBar(this.$elem, this.music)



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
      .audioplayer div:nth-of-type(4) { order: 2; }
      .audioplayer div:nth-of-type(3) { order: 2; }

      .controls {
        display: flex;
        position: absolute;
        max-width: 150px;
        height: 150px;
        width: 100%;
        top: calc(50% - 75px);
        left: calc(50% - 75px);
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        background: url('../assets/cover.png');
        z-index: 10;
        background-repeat: no-repeat;
        background-clip: content-box;
        background-position: 50% 50%;
        overflow: hidden;
      }

      .controls__panel {
        display: flex;
        max-width: 150px;
        width: 100%;
        height: 40px;
        justify-content: space-between;
        align-items: center;
        background: #000;
        padding-left: 10px;
        padding-right: 10px;
        box-sizing: border-box;
        
      }

      i {
        width: 16px; 
        color: #ffffff;
      }

      .volume {
        position: relative;
      }

      .volume:hover .volume-bar {
        display: flex;
      }

      #container {
        top: calc(50% - 84px);
        left: calc(50% - 84px);
        position: absolute;
        width: 168px;
        height: 168px;
      }

      .volume-bar {
        display: none;
        width: 100px;
        height: 100px;
        position: absolute;
        background-color: #fff;
        top: calc(0% - 100px);
        left: calc(50% - 12.5px);
      }

      .volume-bar-toggle {
        width: 100px;
        height: 20px;
        display: inline-block;
        line-height: 16px;
        transform: rotate(90deg);
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


