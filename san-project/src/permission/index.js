/**
 * @file file permission
 * @author chenbo09
 */

export const checkPermission = function (router) {
    return router.path !== '/page/untouchable';
};
