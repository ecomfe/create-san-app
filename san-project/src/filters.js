/**
 * @file 存放san filter
 * @author Chen Bo(chenbo09@baidu.com)
 * Created on 2018/1/31.
 */

import moment from 'moment';

export const formatDate = (value, format) => {
    return moment(value).format(format)
};

