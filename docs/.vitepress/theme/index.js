import Layout from './Layout.vue'
import MumeSession from './components/MumeSession.vue'
import MumeQuote from './components/MumeQuote.vue'

export default {
  Layout,
  enhanceApp({ app }) {
    app.component('MumeSession', MumeSession)
    app.component('MumeQuote', MumeQuote)
  }
}
