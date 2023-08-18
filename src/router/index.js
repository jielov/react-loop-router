/*
 * @description: 路由列表
 * @Author: Jay
 * @Date: 2023-08-18 15:25:28
 * @LastEditors: Jay
 * @LastEditTime: 2023-08-18 15:39:40
 */
import { lazy } from 'react'
const routesList = [
    // 首页
    {
        path: '/',
        component: lazy(() => import('../views/Home/Home.js')),
        exact: true,
        meta: {
            title: '首页',
            //是否需要登录
            requireAuth: false
        }
    },
    // 登录
    {
        path: '/LogIn',
        component: lazy(() => import('../views/LogIn/LogIn.js')),
        exact: true,
        meta: {
            title: '登录',
            //是否需要登录
            requireAuth: false
        }
    },
    //二级路由
    {
        path: "/Basis",
        // 使用懒加载的方法
        component: lazy(() => import("../views/Basis/Basis.js")),
        // 如果要求严格路径
        exact: true,
        //子路由
        children: [
            {
                path: "",
                // index属性来指定默认路由 path需要为空
                index: true,
                component: lazy(() => import("../views/BasisLevel/BasisLevel.js")),
                exact: false,
                meta: {
                    title: '二级路由1',
                    //是否需要登录
                    requireAuth: true
                }
            }, {
                path: "BasisLevel2",
                component: lazy(() => import("../views/BasisLevel2/BasisLevel2.js")),
                exact: false,
                meta: {
                    title: '二级路由2',
                    //是否需要登录
                    requireAuth: true
                }
            }
        ]
    },
    //404页面
    {
        path: '/NotFound',
        exact: false,
        component: lazy(() => import('../views/NotFound/NotFound.js')),
        meta: {
            title: '404',
            //是否需要登录
            requireAuth: false
        }
    }
]
export default routesList;