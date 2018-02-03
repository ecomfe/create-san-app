/**
 * @file action
 * @author chenbo09
 */

import {store} from 'san-store';
import {updateBuilder} from 'san-update';
import _ from 'lodash';

import service from '../service';

// user的例子

store.addAction('fetchUserNames', function (params, {getState, dispatch}) {
    return service.fetchUserNames(params).then(names => {
        dispatch('fillUserNames', names);
    });
});

store.addAction('fillUserNames', function (names) {
    return updateBuilder().set('userNames', names);
});

store.addAction('fetchUsers', function (userName, {getState, dispatch}) {
    return service.fetchUsers(userName).then(users => {
        dispatch('fillUsers', users);
    });
});

store.addAction('fillUsers', function (users) {
    return updateBuilder().set('users', users);
});

store.addAction('startRemoveUser', function (id, {getState, dispatch}) {
    return service.removeUser(id).then(data => {
        let users = getState('users');
        const index = _.findIndex(users, ['id', id]);
        if (index >= 0) {
            dispatch('removeUser', index);
        }
    });
});

store.addAction('removeUser', function (index) {
    return updateBuilder().splice('users', index, 1);
});

