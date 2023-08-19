/*
 * @description: 
 * @Author: Jay
 * @Date: 2023-08-18 14:57:04
 * @LastEditors: Jay
 * @LastEditTime: 2023-08-19 10:07:51
 */
import { Component } from "react";
import { Link } from "react-router-dom";
export default class Home extends Component {
    constructor(props, context) {
        super(props, context)
        console.log("首页加载");
    }
    render() {
        return (
            <>
                首页------
                <Link className="margin-right-sm" to={'/Basis'}>二级页面</Link>
            </>
        );
    }
}