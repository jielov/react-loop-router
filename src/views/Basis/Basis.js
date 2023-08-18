/*
 * @description: 
 * @Author: Jay
 * @Date: 2023-08-18 14:57:39
 * @LastEditors: Jay
 * @LastEditTime: 2023-08-18 16:18:01
 */
import { Component } from "react";
import { Link, Outlet } from "react-router-dom";
export default class Basis extends Component {
    render() {
        return (
            <>
                二级页面
                <div className="">
                    <Link className="margin-right-sm" to={'/Basis'}>BasisLevel1</Link>
                    {/* index 重定向打开 默认打开 /Basis/BasisLevel1 页面 */}
                    {/* index 重定向关闭 /Basis 页面会打开一个空白页面 */}
                    -----
                    <Link className="margin-right-sm" to={'/Basis/BasisLevel1'}>BasisLevel1</Link>
                    {/* index 重定向关闭 需要这样打开 /Basis/BasisLevel1 页面 */}
                    {/* index 重定向打开  /Basis/BasisLevel1 会找不到改页面 */}
                    -----
                    <Link className="margin-right-sm" to={'/Basis/BasisLevel2'}>BasisLevel2</Link>
                </div>

                <div className="">
                    三级路由：  <Outlet />
                </div>
            </>
        );
    }
}