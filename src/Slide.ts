export class Slide {
  private hostElement = document.createElement('article')
  constructor(public contentFunction: (foo) => void) {
    this.contentFunction(this.hostElement)
  }

  render() {
    return this.hostElement
  }
}
