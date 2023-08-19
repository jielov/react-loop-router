/*
 * @description: 
 * @Author: Jay
 * @Date: 2023-08-18 14:32:46
 * @LastEditors: Jay
 * @LastEditTime: 2023-08-18 14:48:22
 */
// React: 框架的核心包
import React from 'react';
// ReactDOM: 专门做渲染相关的包
import ReactDOM from 'react-dom/client';
// 应用全局样式文件
import './index.css';
// 引入根组件
import App from './App';

// 路由
import { BrowserRouter } from 'react-router-dom'

// 渲染根组件App 到一个id为root的DOM节点上
const root = ReactDOM.createRoot(document.getElementById('root'));

/*
 ! 去掉严格模式 页面不会加载2次
*/
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

/*
 ! 严格模式 页面会加载2次
*/
// root.render(
//   //严格模式节点，useEffect执行机制
//   <React.StrictMode>
//     <BrowserRouter>
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </BrowserRouter>
//   </React.StrictMode>
// );
