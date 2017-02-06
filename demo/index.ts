import MissionBriefing from 'mission-briefing'
import {Slide} from "../src/Slide";

const slides: Slide[] = []
slides.push(new Slide((element: HTMLElement) => {
  element.innerHTML = `<p>Your first slide</p>`
}))
slides.push(new Slide((element: HTMLElement) => {
  element.innerHTML = `<p>Your second slide</p>`
}))

let component = new MissionBriefing(".container", slides)
