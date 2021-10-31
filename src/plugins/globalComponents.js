import Header from '@/components/Header.vue'

const GlobalComponents = {
  install(Vue) {
    Vue.component(Header.name, Header);   
  }
};

export default GlobalComponents;
