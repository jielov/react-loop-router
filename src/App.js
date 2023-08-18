/*
 * @description: 根目录
 * @Author: Jay
 * @Date: 2023-08-18 14:32:46
 * @LastEditors: Jay
 * @LastEditTime: 2023-08-18 15:35:38
 */


import React, { Suspense } from 'react'
import {
  Route, Routes, Navigate
} from 'react-router-dom'
// 加载动画 组件
import Loading from './components/loading/loading'
//路由列表
import routesList from './router/index'
//循环路由
import { loopRouter } from "./router/loopRouter"

function App() {
  return (
    <>
      {/* 这里Suspense是用于和React.lazy配合使用的 */}
      <Suspense fallback={<Loading />}>
        <Routes>
          {/* 循环路由 */}
          {loopRouter(routesList)}
          {/* 找不到自己定义的根路由，默认跳转到 */}
          <Route path="*" element={<Navigate to='/NotFound' replace={true} />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
