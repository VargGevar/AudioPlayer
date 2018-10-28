export class Favorite {

  public $root: HTMLElement

  public $elem: HTMLElement = document.createElement('div');

  public $icon: HTMLElement = document.createElement('i')

  public $modal: HTMLElement = document.createElement('div')

  public active: boolean = false

  public toggle() {
    this.active = !this.active
    if (this.active) {
      this.$icon.classList.remove('fas');
      this.$icon.classList.add('far');
    }
    else {
      this.$icon.classList.remove('far');
      this.$icon.classList.add('fas');
    }
  }

  constructor($root: HTMLElement) {
    this.$root = $root
    this.$root.appendChild(this.$elem)
    this.$elem.classList.add('favorite')
    
    this.$icon.classList.add('fas', 'fa-heart')
    this.$elem.appendChild(this.$icon)
    this.$icon.addEventListener('click', this.toggle.bind(this))

    this.$modal.classList.add('favorite-modal')
    this.$elem.appendChild(this.$modal)
  
  }






}
