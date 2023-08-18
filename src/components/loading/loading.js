
/*
 * @description: 加载动画 组件
 * @Author: Jay
 * @Date: 2022-12-06 09:39:25
 * @LastEditors: Jay
 * @LastEditTime: 2023-08-18 13:49:58
 */
import { Component } from "react";
import "./loading.css"
export default class Loading extends Component {
    render() {
        return (
            // 加载动画 
            <div className="container_nomount">
                <div className="loading">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <h2>Loading...</h2>
            </div>
        );
    }
}