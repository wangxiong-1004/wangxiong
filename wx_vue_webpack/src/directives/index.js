/**
 * 自定义指令
 */

import Vue from 'vue';
import showHide from './show_hide';

const directiveObj = {
    'show-hide': showHide
};

Object.keys(directiveObj).forEach(key => Vue.directive(key, directiveObj[key]));
