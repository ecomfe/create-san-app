/**
 * @file list template
 * @author chenbo09
 */

export const template = `
<template>
<div class="list-main">
    <h2>SAN-APP LIST DEMO</h2>
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
`;
