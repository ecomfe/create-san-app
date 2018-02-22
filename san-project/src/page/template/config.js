/**
 * @file file
 * @author chenbo09
 */

export const tableConf = {
    schema: [
        {name: 'name', label: '姓名'},
        {
            name: 'age',
            label: '年龄',
            width: 500,
            sortable: true,
            filter: {
                options: [
                    {text: '全部', value: 'foo'},
                    {text: '未审核', value: 'foo1'},
                    {text: '已审核', value: 'foo2'},
                    {text: '已通过', value: 'foo3'}
                ]
            }
        },
        {name: 'gender', label: '性别', sortable: true},
        {name: 'operation', label: '操作'}
    ]
};
