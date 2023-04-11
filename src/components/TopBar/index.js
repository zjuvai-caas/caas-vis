import './index.css';

import React from 'react';
import { useState } from 'react';
import Setting from './Setting';

export default function TopBar() {
    let [selectedItem, setSelectedItem] = useState(0);
    let [selectedSetting, setSelectedSetting] = useState(0);
    return (
        <div>
            <div className="top-nav">
                <a className="nav-item-logo">成本定价分析系统</a>
                <a
                    className={`nav-item ${selectedItem === 0 ? "active-nav-item" : ""}`}
                    onClick={() => setSelectedItem(0)}
                >产品管理</a>
                <a
                    className={`nav-item ${selectedItem === 1 ? "active-nav-item" : ""}`}
                    onClick={() => setSelectedItem(1)}
                >关系查询</a>
                <a
                    className={`nav-item ${selectedItem === 2 ? "active-nav-item" : ""}`}
                    onClick={() => setSelectedItem(2)}
                >走势分析</a>
                <a
                    className={`nav-item ${selectedItem === 3 ? "active-nav-item" : ""}`}
                    onClick={() => setSelectedItem(3)}
                >权限管理</a>
                <span className="user">
                    <span className="user-info">
                        <span className="user-name">Nathan</span>
                        <span className="user-status">Owner</span>
                    </span>
                    <a
                        className="user-manager"
                        onClick={() => setSelectedSetting(selectedSetting === 0 ? 1 : 0)}
                    >
                    </a>
                </span>
            </div>
            {selectedSetting === 1 ? <Setting></Setting> : <div></div>}
        </div>
    );
}
