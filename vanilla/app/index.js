'use strict';

// Import vue stuff
import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';
import Paragraph from '../../vue-components/Paragraph/Paragraph.vue';
import BigTitle from '../../vue-components/BigTitle/BigTitle.vue';

// register vue components globally
Vue.use(vueCustomElement);
Vue.customElement('custom-paragraph', Paragraph);
Vue.customElement('custom-title', BigTitle );

const body = document.querySelector('body');
const customParagraph = document.createElement('custom-paragraph');
const customTitle = document.createElement('custom-title');

customParagraph.content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Maecenas interdum, orci a hendrerit pharetra, quam neque mattis est, eget aliquam 
dolor quam eu mi. Curabitur in convallis purus. Duis efficitur quam eu ipsum sodales, 
luctus efficitur purus volutpat. Nulla sed turpis sed diam fringilla bibendum a 
id libero. Etiam eleifend, mauris sit amet sollicitudin ullamcorper, nibh quam 
blandit nisl, eget vestibulum ipsum ante quis lorem. Proin egestas risus sed eros 
sollicitudin lacinia quis eget massa. Sed pharetra scelerisque lorem, in imperdiet 
est venenatis at. Ut varius vitae magna quis viverra. Nam a erat nulla. Nulla auctor 
leo ut dui faucibus, eget euismod libero aliquam. Etiam id laoreet eros. Aliquam 
eleifend accumsan felis, quis ornare magna ultricies vel. Donec erat justo, porta 
nec vestibulum sit amet, posuere ac lacus. Mauris ultricies tincidunt risus ac mollis.`;

customTitle.title = 'This is the title';
customTitle.text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Maecenas interdum, orci a hendrerit pharetra, quam neque mattis est, eget aliquam 
dolor quam eu mi. Curabitur in convallis purus. Duis efficitur quam eu ipsum sodales, 
luctus efficitur purus volutpat. Nulla sed turpis sed diam fringilla bibendum a 
id libero. Etiam eleifend, mauris sit amet sollicitudin ullamcorper, nibh quam`;

body.append(customTitle);
body.append(customParagraph);

