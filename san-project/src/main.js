/**
 * @file 项目主入口
 * @author chenbo09
 */

import {router} from 'san-router';

// style
import 'san-xui/dist/xui.css';
import './style.less';

// actions
import './page/action';

// config route
import BasicList from './page/list.js';


router.add({rule: '/', Component: BasicList, target: '#app'});
router.add({rule: '/page/list', Component: BasicList, target: '#app'});

// start
router.start();
