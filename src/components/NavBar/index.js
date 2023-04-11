import './index.css';

import React from 'react';
import { useState } from 'react';

export default function NavBar(props) {
    let [selectedItem, setSelectedItem] = useState(0);
    let {setSelectedPage} = props;
    return (
        <div className="navbar">
            <div className="navbar-item">
                <h4 className="item-head">产品管理</h4>
                <div
                    className={`item-body ${selectedItem === 0 ? "active-item-body" : ""}`}
                    onClick={() => {setSelectedItem(0);setSelectedPage(0);}}
                >产品列表</div>
                <div
                    className={`item-body ${selectedItem === 1 ? "active-item-body" : ""}`}
                    onClick={() => {setSelectedItem(1);setSelectedPage(1);}}
                >新增产品</div>
                <div
                    className={`item-body ${selectedItem === 2 ? "active-item-body" : ""}`}
                    onClick={() => {setSelectedPage(2);setSelectedItem(2);}}
                >产品详情</div>
            </div>
            <div className="navbar-item">
                <h4 className="item-head">滤饼管理</h4>
                <div
                    className={`item-body ${selectedItem === 3 ? "active-item-body" : ""}`}
                    onClick={() => {setSelectedItem(3);setSelectedPage(3);}}
                >滤饼列表</div>
                <div
                    className={`item-body ${selectedItem === 4 ? "active-item-body" : ""}`}
                    onClick={() => {setSelectedItem(4);setSelectedPage(4);}}
                >新增滤饼</div>
            </div>
            <div className="navbar-item">
                <h4 className="item-head">原料管理</h4>
                <div
                    className={`item-body ${selectedItem === 5 ? "active-item-body" : ""}`}
                    onClick={() => {setSelectedItem(5);setSelectedPage(5);}}
                >原料列表</div>
                <div
                    className={`item-body ${selectedItem === 6 ? "active-item-body" : ""}`}
                    onClick={() => {setSelectedItem(6);setSelectedPage(6);}}
                >新增原料</div>
            </div>
        </div>
    );
}