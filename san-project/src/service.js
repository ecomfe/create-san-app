/**
 * @file 服务
 */

import axios from 'axios';

export default {
    // 在baseList中被使用

    fetchUsers: function (userName) {
        return axios.post('/api/users', {userName})
        .then(function (response) {
            return response.data;
        })
    },

    removeUser: function (id) {
        return axios.post('/api/user/remove', {
            id
        })
        .then(function (response) {
            return response.data;
        })
    },

    fetchUserNames: function () {
        return axios.post('/api/userNames', {})
        .then(function (response) {
            return response.data;
        })
    }
};
