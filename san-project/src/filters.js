/**
 * @file 存放公用的san filter
 * @author chenbo09
 */

import moment from 'moment';

export const formatDate = (value, format) => moment(value).format(format);

