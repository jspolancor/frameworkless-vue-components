import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';

// vue stuff
import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';
import Paragraph from '../../vue-components/Paragraph/Paragraph.vue';
import BigTitle from '../../vue-components/BigTitle/BigTitle.vue';

// register vue components globally
Vue.use(vueCustomElement);
Vue.customElement('skeleton-paragraph', Paragraph);
Vue.customElement('skeleton-title', BigTitle );

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Counter),
    document.getElementById('mount')
  );
});
