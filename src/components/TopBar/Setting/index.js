import './index.css';

import React from 'react';
import { useState } from 'react';

export default function Setting() {
    let [selectedItem, setSelectedItem] = useState(0);
    return (
        <div className="setting">
            <div
                className={`setting-item  setting-item-top ${selectedItem === 1 ? "active-setting-item" : ""}`}
                onClick={() => setSelectedItem(1)}
            >Nathan</div>
            <div
                className={`setting-item ${selectedItem === 2 ? "active-setting-item" : ""}`}
                onClick={() => setSelectedItem(2)}
            >个人主页</div>
            <div
                className={`setting-item ${selectedItem === 3 ? "active-setting-item" : ""}`}
                onClick={() => setSelectedItem(3)}
            >权限设置</div>
            <div
                className={`setting-item  setting-item-bottom ${selectedItem === 4 ? "active-setting-item" : ""}`}
                onClick={() => setSelectedItem(4)}
            >退出</div>
        </div>
    );
}
