/**
 /**
 * @file 服务
 * @author chenbo09
 */

import axios from 'axios';

export default {
    async fetchUsers(userName) {
        try {
            const response = await axios.post('/api/users', {userName});
            return response.data;
        }
        catch (err) {
            return err;
        }
    },

    async removeUser(id) {
        try {
            const response = await axios.post('/api/user/remove', {
                id
            });
            return response.data;
        }
        catch (err) {
            return err;
        }
    },

    async fetchUserNames() {
        try {
            const response = await axios.post('/api/userNames', {});
            return response.data;
        }
        catch (err) {
            return err;
        }
    }
};
