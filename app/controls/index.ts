export class Controls {

  public $root: HTMLElement

  public $elem: HTMLElement = document.createElement('div');

  public $btnPrev: HTMLElement = document.createElement('i');

  public $btnPlay: HTMLElement = document.createElement('i');

  public $btnNext: HTMLElement = document.createElement('i');

  public active: boolean = false

  public $music: HTMLAudioElement

  public toggle() {
    this.active = !this.active
    if (this.active) {
      this.$btnPlay.classList.remove('fa-play');
      this.$btnPlay.classList.add('fa-pause');
      this.$music.play()
    }
    else {
      this.$btnPlay.classList.remove('fa-pause');
      this.$btnPlay.classList.add('fa-play');
      this.$music.pause()
    }

  }

  constructor($root: HTMLElement, $music: HTMLAudioElement) {
    this.$root = $root
    this.$music = $music
    this.$root.appendChild(this.$elem)
    this.$elem.classList.add('controls')
    
    this.$btnPrev.classList.add('fas', 'fa-fast-backward')
    this.$elem.appendChild(this.$btnPrev)

    this.$btnPlay.classList.add('fas', 'fa-play')
    this.$elem.appendChild(this.$btnPlay)
    this.$btnPlay.addEventListener('click', this.toggle.bind(this))

    this.$btnNext.classList.add('fas', 'fa-fast-forward')
    this.$elem.appendChild(this.$btnNext)

  }



}