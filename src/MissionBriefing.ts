import {IComponent, KeyCodes} from "vanilla-typescript"
import './MissionBriefing.pcss'
import {Slide} from "./Slide";

/**
 * A presentation
 *
 * @constructor
 */
export default class MissionBriefing implements IComponent {
  destroyBoundWithThis = this.destroy.bind(this)
  private hostElement: HTMLElement
  private currentSlideIndex: number = 0

  constructor(public selector: string, public slides: Slide[]) {
    this.hostElement = <HTMLElement> document.querySelector(selector)
  }

  show() {
    this.renderCurrentSlide()
  }

  addListeners() {
    document.body.addEventListener('keyup', (event: KeyboardEvent) => {
      switch (event.key) {
        case KeyCodes.LEFT:
          this.moveToPreviousSlide()
          break;
        case KeyCodes.RIGHT:
          this.moveToNextSlide()
          break;
        default:
      }
    })
  }

  destroy() {
  }

  private renderCurrentSlide() {
    this.hostElement.innerHTML = ''
    this.hostElement.appendChild(this.slides[this.currentSlideIndex].render())
  }

  moveToPreviousSlide() {
    this.currentSlideIndex !== 0 && this.currentSlideIndex--
  }

  moveToNextSlide() {
    this.currentSlideIndex !== this.slides.length - 1 && this.currentSlideIndex++
  }
}


