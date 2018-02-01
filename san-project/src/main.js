// style

import 'san-xui/dist/xui.css';
import './style.less';

// actions
import './bce/action'


// route

import BceBasicList from './bce/BasicList.js'

import {router} from 'san-router'


router.add({rule: '/', Component: BceBasicList, target: '#app'});
router.add({rule: '/bce/list', Component: BceBasicList, target: '#app'});

// start
router.start();
