export class ProgressBar {

  public $root: HTMLElement

  public $elem: HTMLElement = document.createElement('div');


  constructor($root: HTMLElement) {
    this.$root = $root
    this.$root.appendChild(this.$elem)
    this.$elem.id = 'container'

    var ProgressBar = require('progressbar.js')
    var line = new ProgressBar.Line('#container');

  }

}