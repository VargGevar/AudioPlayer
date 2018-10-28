export class Volume {

  public $root: HTMLElement

  public $elem: HTMLElement = document.createElement('div');

  public $icon: HTMLElement = document.createElement('i')

  public $modal: HTMLElement = document.createElement('div')

  public active: boolean = false

  public toggle() {
    this.active = !this.active
    if (this.active) {
      this.$icon.classList.remove('fa-volume-down');
      this.$icon.classList.add('fa-volume-mute');
    }
    else {
      this.$icon.classList.remove('fa-volume-mute');
      this.$icon.classList.add('fa-volume-down');
    }
  }

  constructor($root: HTMLElement) {
    this.$root = $root
    this.$root.appendChild(this.$elem)
    this.$elem.classList.add('volume')

    this.$icon.classList.add('fas', 'fa-volume-down')
    this.$elem.appendChild(this.$icon)
    this.$icon.addEventListener('click', this.toggle.bind(this))

    this.$modal.classList.add('volume-modal')
    this.$elem.appendChild(this.$modal)

  }

} 