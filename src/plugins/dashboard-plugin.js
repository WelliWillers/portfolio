import GlobalComponents from './globalComponents';
import GlobalDirectives from './globalDirectives';
import Element from 'element-ui'
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
locale.use(lang)


import { BootstrapVue } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import '@/assets/global.scss';

import Unicon from 'vue-unicons/dist/vue-unicons-vue2.umd'
import { 
  uniEstate, uniUser, uniFileAlt, uniBriefcase, uniScenery, uniMessage, uniTimes, uniApps,
  uniWhatsappAlt, uniLinkedin, uniFacebook, uniInstagramAlt, uniTelegram, uniSkype,
  uniMouseAlt,
  uniArrowRight, uniArrowUp, uniArrowLeft, uniArrowDown
} from 'vue-unicons/dist/icons'
Unicon.add(
  [
    uniEstate, uniUser, uniFileAlt, uniBriefcase, uniScenery, uniMessage, uniTimes, uniApps,
    uniWhatsappAlt, uniLinkedin, uniFacebook, uniInstagramAlt, uniTelegram, uniSkype,
    uniMouseAlt,
    uniArrowRight, uniArrowUp, uniArrowLeft, uniArrowDown
  ]
)

export default {
  install(Vue) {
    Vue.use(GlobalComponents);
    Vue.use(GlobalDirectives);
    Vue.use(BootstrapVue)
    Vue.use(Unicon, { 
    fill: 'inherit',
    height: 24,
    width: 24
  });
    Vue.use(Element, { locale });
  }
};
