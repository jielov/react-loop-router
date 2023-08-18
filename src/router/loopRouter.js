/*
 * @description: 路由循环 添加到页面
 * @Author: Jay
 * @Date: 2023-08-18 15:25:38
 * @LastEditors: Jay
 * @LastEditTime: 2023-08-18 15:25:46
 */
import {
    Route, Navigate
} from 'react-router-dom'

/* ----遍历一级路由----*/
const loopRouter = (routerList) => {
    return routerList.map((item) => {
        const { path, exact, children } = item;
        return <Route
            key={path}
            exact={exact}
            path={path}
            element={<DomTitle item={item}> </DomTitle>}
        >
            {/* 遍历二级路由 有些页面没有二级 所以默认为空 [] */}
            {SecondRouter(children || [])}
        </Route >;
    });
};

/* ----遍历二级路由----*/
const SecondRouter = (children) => {
    return children.map(i => {
        return <Route
            key={i.path}
            exact={i.exact}
            path={i.path}
            index={i.index}
            element={<DomTitle item={i}></DomTitle>}
        />
    })
}

/* ----设置页面标题----*/
const DomTitle = ({ item }) => {
    const { meta } = item
    document.title = meta?.title || '';
    return meta?.requireAuth ? <RequireAuth item={item} /> : <item.component />
}

/* ---- 判断是否需要登录 ----*/
const RequireAuth = ({ item }) => {
    // const token = sessionStorage.getItem('Authorization')
    const token = '已登录'
    if (token === null || token === '') {
        return <Navigate to='/LogIn' replace={true} />
    } else {
        return <item.component />
    }
}

export { loopRouter, RequireAuth }