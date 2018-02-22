/**
 * @file list template
 * @author chenbo09
 */

import img from '../../assets/images/san-logo.svg';

export const template = `
<template>
<div class="list-main">
    <img src="${img}">
    <h2>SAN-APP LIST DEMO</h2>
    <xui-select datasource="{{userNames}}" on-change="resetList" value="{=userName=}"/>
    <xui-table
        schema="{{table.schema}}"
        loading="{{listLoading}}"
        error="{{table.error}}"
        datasource="{{users}}">
        <div class="ui-table-loading" slot="loading">自定义加载中....</div>
        <div class="ui-table-error" slot="error">
            啊呀，出错了？<a href="javascript:void(0)" on-click="resetList">重新加载</a>
        </div>
        <div slot="c-operation"><a on-click="removeRecord(rowIndex)" href="javascript:void(0)">删除</a></div>
    </xui-table>
    <xui-button on-click="resetList">刷新列表</xui-button>
    <xui-button on-click="reloadPage">刷新整页</xui-button>
</div>
</template>
`;
