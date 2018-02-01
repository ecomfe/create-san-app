import san from 'san'
import {formatDate} from '../filters'
import {Link} from 'san-router'
import {connect} from 'san-store'

import {Table, Button, Select} from 'san-xui';
import {tableConf} from './config';

const template = `
<template>
<div class="list-main">
    <h2>BCE-SAN-APP BasicListDemo</h2>
    <xui-select datasource="{{userNames}}" on-change="resetList" value="{=userName=}"/>
    <xui-table
        schema="{{table.schema}}"
        cell-builder="{{table.cellRenderer}}"
        on-command="onCommand"
        loading="{{table.loading}}"
        error="{{table.error}}"
        datasource="{{users}}">
        <div class="ui-table-loading" slot="loading">自定义加载中....</div>
        <div class="ui-table-error" slot="error">
            啊呀，出错了？<a href="javascript:void(0)" on-click="resetList">重新加载</a>
        </div>
    </xui-table>
    
    <xui-button on-click="resetList">刷新</xui-button>
    
</div>
</template>
`

let MyComponent = san.defineComponent({
    template,
    components: {
        'router-link': Link,
        'xui-table': Table,
        'xui-button': Button,
        'xui-select': Select
    },

    //todo 还需优化 。目前共享的数据放在了san-store, 本地配置类型的数据放在initData。
    initData() {
        return {
            userNames: [],
            userName: '',
            user: [],
            table: tableConf
        };
    },

    filters: {
        formatDate: formatDate
    },

    route() {
        // route 这个对象里面有query path等值，可以用来初始化参数
        // 如果要改本地变量，直接改即可。如果要改san-store中的变量，必须通过action
        let route = this.data.get('route');
        let id = route.query.id || '';

        // 这里假设从其他页面可能带一个参数过来例如本地变量 id，进来的时候处理。

        this.data.set('id', id);

        this.actions.list();
        this.actions.userNames();

    },

    resetList() {
        // userName 双向绑定值没有立刻更新
        san.nextTick(() => {
            // 这里可以传参数
            const userName = this.data.get('userName');
            this.actions.list({userName});
        });
    },

    onCommand({type, payload, rowIndex}) {
        // 通过store修改users
        let user = this.data.get('users')[rowIndex - 1];
        this.actions.remove(user.id);
    }
});

// 这里来链接页面 && store  绑定的变量类似于redux中state的概念。可以全局共享，如果是本地的变量，自己在initData中声明即可。

connect.san(
    {users: 'users', userNames: 'userNames'},
    {
        list: 'fetchUsers',
        remove: 'startRemoveUser',
        userNames: 'fetchUserNames'
    }
)(MyComponent);


export default MyComponent