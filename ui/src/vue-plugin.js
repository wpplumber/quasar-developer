import {version} from '../package.json'

import GeoBtn from './components/GeoBtn.vue'

export {
  version,
  GeoBtn

}

export default {
    version,
  GeoBtn,

  install(Vue){
    Vue.component(GeoBtn.name, GeoBtn)
  }
}