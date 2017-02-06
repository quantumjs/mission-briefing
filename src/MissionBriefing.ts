import {IComponent} from "vanilla-typescript"
import './MissionBriefing.pcss'

/**
 * A presentation
 *
 * @constructor
 */
export default class MissionBriefing implements IComponent {
  destroyBoundWithThis = this.destroy.bind(this)
  private hostElement: HTMLElement

  constructor() {
  }


  /**
   * Shows
   * @param {Element} child we need to keep the reference to keep custom functionality in the child
   */
  show() {

  }

  addListeners() {
  }

  destroy() {
  }
}


