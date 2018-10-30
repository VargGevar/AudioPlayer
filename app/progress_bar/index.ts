export class Progress {

  public $root: HTMLElement

  public $elem: HTMLElement = document.createElement('div');

  public $progressCircle: HTMLElement = document.createElement('div');

  public $progressMask: HTMLElement = document.createElement('div');

  public $progressFill: HTMLElement = document.createElement('div');




  constructor($root: HTMLElement) {
    this.$root = $root
    this.$root.appendChild(this.$elem)
    this.$elem.classList.add('radial-progress')

    this.$progressCircle.classList.add('circle')
    this.$elem.appendChild(this.$progressCircle)

    this.$progressMask.classList.add('mask')
    this.$progressCircle.appendChild(this.$progressMask)

    this.$progressFill.classList.add('fill')
    this.$progressMask.appendChild(this.$progressFill)

    let div = this.$progressMask.cloneNode(true);
    this.$progressMask.parentNode.insertBefore(div, this.$progressMask.nextElementSibling);

    this.$progressCircle.firstChild.classList.add('left');
    this.$progressCircle.lastChild.classList.add('right');

    let fill = document.querySelectorAll('.circle .fill');

    function randomize() {
      let rotation = Math.floor(Math.random() * 360);
      for (let i = 0; i < fill.length; i++) {
        fill[i].style.transform = `rotate(${rotation}deg)`;
      }
    }
    setInterval(function(){
      randomize();
    }, 1000);
  }


}