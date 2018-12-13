export class Controls {

  public $root: HTMLElement

  public $elem: HTMLElement = document.createElement('div');

  public $panel: HTMLElement = document.createElement('div');

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
    else if (this.$music.ended) {
      this.$btnPlay.classList.remove('fa-pause');
      this.$btnPlay.classList.add('fa-play');
    }
    else {
      this.$btnPlay.classList.remove('fa-pause');
      this.$btnPlay.classList.add('fa-play');
      this.$music.pause()
    }

  }

  public trackToggle() {
    const playlist = ['/assets/music.mp3', '/assets/andromeda.mp3', '/assets/battle.mp3', '/assets/dressed-to-kill.mp3', '/assets/robeast.mp3', '/assets/poison.mp3'];
    let current = 0;
    this.$music.addEventListener('ended', () => {
      current = ++current < playlist.length ? current : 0;
      this.$music.src = playlist[current];
      this.$music.play();
    }, true);
    
  }

  constructor($root: HTMLElement, $music: HTMLAudioElement) {
    this.$root = $root
    this.$music = $music
    this.$root.appendChild(this.$elem)
    this.$elem.classList.add('controls')

    this.$panel.classList.add('controls__panel')
    this.$elem.appendChild(this.$panel)

    this.$btnPrev.classList.add('fas', 'fa-fast-backward')
    this.$panel.appendChild(this.$btnPrev)

    this.$btnPlay.classList.add('fas', 'fa-play')
    this.$panel.appendChild(this.$btnPlay)
    this.$btnPlay.addEventListener('click', this.toggle.bind(this))

    this.$btnNext.classList.add('fas', 'fa-fast-forward')
    this.$panel.appendChild(this.$btnNext)


    this.trackToggle();
  }



}