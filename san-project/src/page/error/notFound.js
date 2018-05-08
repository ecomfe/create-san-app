/**
 * @file a simple list demo
 * @author chenbo09
 */

import san from 'san';
import {Link} from 'san-router';

import {template} from './notFound.template';


export default san.defineComponent({
    template,
    components: {
        'router-link': Link
    }
});

