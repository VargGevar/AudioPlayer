export class Volume {

  public $root: HTMLElement

  public $elem: HTMLElement = document.createElement('div');

  public $icon: HTMLElement = document.createElement('i')

  public $volumeBar: HTMLElement = document.createElement('div')

  public $volumeBarToggle: HTMLInputElement = document.createElement('input')

  public active: boolean = false

  public $music: HTMLAudioElement

  public toggle() {
    this.active = !this.active
    let currentValue = +this.$volumeBarToggle.value;
    if (this.active) {
      this.$icon.classList.remove('fa-volume-down');
      this.$icon.classList.add('fa-volume-mute');
      this.$music.volume = 0;
    }
    else {
      this.$icon.classList.remove('fa-volume-mute');
      this.$icon.classList.add('fa-volume-down');
      this.$music.volume = 0.5;
    }
  }

  public volumeToggle() {
    let currentValue = +this.$volumeBarToggle.value;
    this.$music.volume = currentValue / 100;
  }

  constructor($root: HTMLElement, $music: HTMLAudioElement) {
    this.$root = $root
    this.$music = $music
    this.$root.appendChild(this.$elem)
    this.$elem.classList.add('volume')

    this.$icon.classList.add('fas', 'fa-volume-down')
    this.$elem.appendChild(this.$icon)
    this.$icon.addEventListener('click', this.toggle.bind(this))

    this.$volumeBar.classList.add('volume-bar')
    this.$elem.appendChild(this.$volumeBar)

    this.$volumeBarToggle.classList.add('volume-bar-toggle');
    this.$volumeBarToggle.type = 'range';
    Object.assign(this.$volumeBarToggle, { min: 0, max: 100, value: 50, style: 'width: 150px;', onchange: this.volumeToggle() });
    this.$volumeBar.appendChild(this.$volumeBarToggle);

  }

} 