/**
 * @file mock服务入口
 * @author chenbo09
 */

const jsonServer = require('json-server');
const server = jsonServer.create();
// todo 改成js 来动态生成业务固定格式？比如list
const router = jsonServer.router('mockup/db.json');
// custom routes
const customRoutes = require('./custom.routes.js');

const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Add custom routes before JSON Server router。
server.use(jsonServer.rewriter(customRoutes));

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);

// 因为bce目前不是用的REST API。ajax请求都是POST，本地mock时不想改数据 先把所有的POST请求转为GET。
server.use((req, res, next) => {
    // 因为本地mock不想改数据 先把所有的POST请求转为GET
    if (req.method === 'POST') {
        req.method = 'GET';
    }
    // Continue to JSON Server router
    next();
});

// Use default router
server.use(router);
server.listen(9001, () => {
    console.log('JSON Server is running');
});
