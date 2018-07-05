// Import vue stuff
import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';
import Paragraph from '../vue-components/Paragraph/Paragraph.vue';
import BigTitle from '../vue-components/BigTitle/BigTitle.vue';

// register vue components globally
Vue.use(vueCustomElement);
Vue.customElement('custom-paragraph', Paragraph);
Vue.customElement('custom-title', BigTitle);

import 'babel-polyfill'
import 'isomorphic-fetch'
import 'normalize.css'
import 'flexboxgrid/dist/flexboxgrid.min.css'
import 'jquery'
import Backbone from 'backbone'

import '../styles/index.css'

import Router from './router'

// eslint-disable-next-line
new Router();

Backbone.history.start()
