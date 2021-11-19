// import Component from './components/Component'
import GeoBtn from './components/GeoBtn.vue'


const version = __UI_VERSION__

function install (app) {
  app.component(GeoBtn.name, GeoBtn)

}

export {
  version,
  GeoBtn,

  install
}
