import Layout from './Layout.vue'
import MumeSession from './components/MumeSession.vue'

export default {
  Layout,
  enhanceApp({ app }) {
    app.component('MumeSession', MumeSession)
  }
}
