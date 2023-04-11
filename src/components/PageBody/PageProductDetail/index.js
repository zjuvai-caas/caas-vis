import './index.css';
import React from 'react';
import ReactEcharts from "echarts-for-react"
import AntSelect from '../../AntdComp/SelectAntd';
import axios from 'axios';
import { Component } from 'react';

export default class PageProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: 0,
            prodValue: '',
            prodIdValue: '',
            prodSery: 'Any',
            processCost: '￥0.00',
            quantity: '0',
            costPer: '￥0.00',
            attachInfo: 'nothing'
        }
    }
    getOption = () => {
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

    //setState在react中可能会表现为异步
    onChange = (value) => {this.setState({ prodValue: value });}
    render() {
        return (
            <div className="page-body" >
                <div className="data-page">
                    <div className="table-bar">
                        <div className="table-head">产品详情页</div>
                    </div>
                    <div className="table-main">
                        <div className="prod-attribute">
                            <div className="attribute-item">
                                <div className="text-prod-name">产品名称：</div>
                                <div className='select-name'><AntSelect placeholder="select a Product" onChange={this.onChange}></AntSelect></div>
                                <div
                                    className="confirm"
                                    onClick={
                                        () => {
                                            // console.log("send a request")
                                            // console.log(this.state.prodValue);
                                            axios.get("http://localhost:3000/products",
                                                {
                                                    params: {
                                                        prodValue: this.state.prodValue,
                                                    }
                                                }).then((response) => this.setState({
                                                    prodValue: response.data[0].productName,
                                                    prodIdValue: response.data[0].prodIdValue,
                                                    prodSery: response.data[0].productSeriesName,
                                                    processCost: response.data[0].processCost,
                                                    quantity: response.data[0].quantity,
                                                    costPer: response.data[0].costPer,
                                                    attachInfo: response.data[0].attachInfo,
                                                })).catch(error => console.log(error));
                                        }
                                    }
                                >确定</div>
                            </div>
                            <div className="attribute-item">
                                <div className="text-prod-name">产品编号：</div>
                                <div className='select-name'><AntSelect placeholder="select a Product id"></AntSelect></div>
                            </div>
                            <div className="attribute-item">
                                <div className="text-prod-name">产品系列：</div>
                                <p className="query-show">{this.state.prodSery}</p>
                            </div>
                            <div className="attribute-item">
                                <div className="text-prod-name">加工成本：</div>
                                <p className="query-show">{this.state.processCost}</p>
                            </div>
                            <div className="attribute-item">
                                <div className="text-prod-name">核算数量：</div>
                                <p className="query-show">{this.state.quantity}</p>
                            </div>
                            <div className="attribute-item">
                                <div className="text-prod-name">单位成本：</div>
                                <p className="query-show">{this.state.costPer}</p>
                            </div>
                            <div className="attribute-item">
                                <div className="text-prod-name">附加信息：</div>
                                <p className="query-show">{this.state.attachInfo}</p>
                            </div>
                        </div>
                        <div className="relation">
                            <div className="selection-head">
                                <div
                                    className={`selection-item ${this.state.selectedItem === 0 ? "active-selection-item" : ""}`}
                                    onClick={() => this.setState({ selectedItem: 0 })}
                                >原料关联</div>
                                <div
                                    className={`selection-item ${this.state.selectedItem === 1 ? "active-selection-item" : ""}`}
                                    onClick={() => this.setState({ selectedItem: 1 })}
                                >滤饼关联</div>
                                <div
                                    className={`selection-item ${this.state.selectedItem === 2 ? "active-selection-item" : ""}`}
                                    onClick={() => this.setState({ selectedItem: 2 })}
                                >历史价格</div>
                            </div>
                            <div className="echart-sank">
                                <ReactEcharts
                                    option={this.getOption()}
                                    style={{ width: '100%', height: '100%' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}