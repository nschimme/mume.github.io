import { TUTORIAL } from '../../.vitepress/theme/data/tutorialContent.js'

export default {
  paths() {
    return TUTORIAL.lessons.map((_, index) => {
      return {
        params: { step: String(index + 1) }
      }
    })
  }
}
