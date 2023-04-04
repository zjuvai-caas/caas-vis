import './index.css';

import React from 'react';
import { useState } from 'react';
import ReactEcharts from "echarts-for-react"
import AntSelect from '../SelectAntd';

export default function PageBody() {
    const getOption = () => {
        let option = {
            series: {
                type: 'sankey',
                layout: 'none',
                emphasis: {
                    focus: 'adjacency'
                },
                data: [
                    {
                        name: 'a'
                    },
                    {
                        name: 'b'
                    },
                    {
                        name: 'a1'
                    },
                    {
                        name: 'a2'
                    },
                    {
                        name: 'b1'
                    },
                    {
                        name: 'c'
                    }
                ],
                links: [
                    {
                        source: 'a',
                        target: 'a1',
                        value: 5
                    },
                    {
                        source: 'a',
                        target: 'a2',
                        value: 3
                    },
                    {
                        source: 'b',
                        target: 'b1',
                        value: 8
                    },
                    {
                        source: 'a',
                        target: 'b1',
                        value: 3
                    },
                    {
                        source: 'b1',
                        target: 'a1',
                        value: 1
                    },
                    {
                        source: 'b1',
                        target: 'c',
                        value: 2
                    }
                ]
            }
        };
        return option;
    };
    let queryResult = {};
    let { prodSery = 'Any', processCost = '￥0.00', quantity = '0', costPer = '￥0.00', attachInfo = 'nothing' } = queryResult;
    let [selectedItem, setSelectedItem] = useState(0);
    return (
        <div className="page-body">
            <div className="data-page">
                <div className="table-bar">
                    <div className="table-head">产品详情页</div>
                </div>
                <div className="table-main">
                    <div className="prod-attribute">
                        <div className="attribute-item">
                            <div className="text-prod-name">产品名称：</div>
                            <div className='select-name'><AntSelect placeholder="select a Product"></AntSelect></div>
                        </div>
                        <div className="attribute-item">
                            <div className="text-prod-name">产品编号：</div>
                            <div className='select-name'><AntSelect placeholder="select a Product id"></AntSelect></div>
                        </div>
                        <div className="attribute-item">
                            <div className="text-prod-name">产品系列：</div>
                            <p className="query-show">{prodSery}</p>
                        </div>
                        <div className="attribute-item">
                            <div className="text-prod-name">加工成本：</div>
                            <p className="query-show">{processCost}</p>
                        </div>
                        <div className="attribute-item">
                            <div className="text-prod-name">核算数量：</div>
                            <p className="query-show">{quantity}</p>
                        </div>
                        <div className="attribute-item">
                            <div className="text-prod-name">单位成本：</div>
                            <p className="query-show">{costPer}</p>
                        </div>
                        <div className="attribute-item">
                            <div className="text-prod-name">附加信息：</div>
                            <p className="query-show">{attachInfo}</p>
                        </div>
                    </div>
                    <div className="relation">
                        <div className="selection-head">
                            <div
                                className={`selection-item ${selectedItem === 0 ? "active-selection-item" : ""}`}
                                onClick={() => setSelectedItem(0)}
                            >原料关联</div>
                            <div
                                className={`selection-item ${selectedItem === 1 ? "active-selection-item" : ""}`}
                                onClick={() => setSelectedItem(1)}
                            >滤饼关联</div>
                            <div
                                className={`selection-item ${selectedItem === 2 ? "active-selection-item" : ""}`}
                                onClick={() => setSelectedItem(2)}
                            >历史价格</div>
                        </div>
                        <div className="echart-sank">
                            <ReactEcharts
                                option={getOption()}
                                style={{ width: '100%', height: '100%' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}