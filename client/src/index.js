import './index.html';
import './index.less';
import 'todomvc-app-css/index.css';
import dva from 'dva';
import reacteor,{createModels} from './common/reacteor';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use();

// 3. Model
createModels(app, 'todo', 'users');

// 4. Router
app.router(require('./router'));

// 5. Start
if (!localStorage.getItem(reacteor.endpoint+'__login_token__'))
  app.start('#root');
else
  reacteor.on('loggedIn',function () {
    if (!app._store)
      app.start('#root');
  });
