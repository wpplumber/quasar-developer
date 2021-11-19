import { h } from 'vue'
import { QBadge } from 'quasar'

export default {
  name: 'GeoBtn',

  setup () {
    return () => h(QBadge, {
      class: 'GeoBtn',
      label: 'GeoBtn'
    })
  }
}
