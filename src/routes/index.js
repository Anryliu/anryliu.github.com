/**
 * @file
 * Created by hanan on 16/10/15.
 */
const Hello = r => require(['views/hello'], r);
const Anry = r => require(['views/anry'], r);
const NotFound = r => require(['views/notfound'], r);

// 根目录
const rootPath = '';

// 页面路由
const routes = [
  {path: '/', redirect: {name: 'hello'}},
  {path: '/hello', component: Hello, name: 'hello'},
  {path: '/anry', component: Anry, name: 'anry'}
].map(route => {
  route.path = rootPath + route.path;
  return route;
});

// 404 页
routes.push({path: '*', component: NotFound, name: 'notfound'});

export default routes;
