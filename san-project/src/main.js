/**
 * @file 项目主入口
 * @author chenbo09
 */

import {router} from 'san-router';

// style
import 'san-xui/dist/xui.css';
import './page/template/list.less';
import './page/error/notFound.less';
import './iconfont.less';

// actions
import './page/template/action';

// config route
import notFound from './page/error/notFound';
import BasicList from './page/template/list';

import {checkPermission} from './permission/index';


router.add({rule: '/', Component: BasicList, target: '#app'});
router.add({rule: '/page/untouchable', Component: notFound, target: '#app'});
router.add({rule: '/page/404', Component: notFound, target: '#app'});
router.add({rule: '/page/list', Component: BasicList, target: '#app'});

// listen 这里可以添加权限设置等切面函数
router.listen(function (e) {
    // 此处也能使用异步，但会影响页面渲染效率。
    // https://github.com/ecomfe/san-router

    if (!checkPermission(e)) {
        e.stop();
        this.locator.redirect('/');
    }
});

// start
router.start();
