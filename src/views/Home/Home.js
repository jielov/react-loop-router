import { Component } from "react";
import { Link } from "react-router-dom";
export default class Home extends Component {
    render() {
        return (
            <>
                首页------
                <Link className="margin-right-sm" to={'/Basis'}>二级页面</Link>
            </>
        );
    }
}