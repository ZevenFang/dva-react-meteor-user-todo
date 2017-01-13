import './index.html';
import './index.less';
import 'todomvc-app-css/index.css';
import dva from 'dva';
import {createModels} from './common/reacteor';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use();

// 3. Model
createModels(app, 'todo');

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
