import './index.css';
import React from 'react';
import ReactEcharts from "echarts-for-react"
import AntSelect from '../../AntdComp/SelectAntd';
import axios from 'axios';
import { Component } from 'react';
import OrdinaryTable from '../../../General/OrdinaryTable';
import { BlueButton } from '../../../General/BlueButton';
import { ArrowLeftOutlined } from '@ant-design/icons';

export default class PageProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: 0,
        }
        this.data = props.data;
    }
    //setState在react中可能会表现为异步

    setSelectionBody = () => {
        switch (this.state.selectedItem) {
            case 0:
                return (
                    <OrdinaryTable
                        tableHead={["rawMaterialName", "rawMaterialId", "rawMaterialIndex", "rawMaterialPrice"]}
                        data={this.data.rawMaterialList}
                    />
                )
            case 1:
                return (
                    <OrdinaryTable
                        tableHead={["filterCakeName", "filterCakeId", "filterCakeIndex", "filterCakeColor"]}
                        data={this.data.filterCakeList}
                    />
                )
        }
    }

    render() {
        return (
            <div className="page-body" >
                <div className="data-page">
                    <div className="table-bar">
                        <div className="table-head">产品详情页</div>
                        <div onClick={() => this.props.backToProductList()} style={{'margin-left':'20px'}}>
                            <BlueButton
                                Component={ArrowLeftOutlined}
                                text="返 回"
                            />
                        </div>
                    </div>
                    <div className="table-main">
                        <div className="prod-attribute">
                            <div className="attribute-item">
                                <div className="text-prod-name">产品名称：</div>
                                <p className="query-show">{this.data.productName}</p>
                            </div>
                            <div className="attribute-item">
                                <div className="text-prod-name">产品编号：</div>
                                <p className="query-show">{this.data.productIndex}</p>
                            </div>
                            <div className="attribute-item">
                                <div className="text-prod-name">产品系列：</div>
                                <p className="query-show">{this.data.productSeriesId}</p>
                            </div>
                            <div className="attribute-item">
                                <div className="text-prod-name">加工成本：</div>
                                <p className="query-show">{this.data.productProcessingCost}</p>
                            </div>
                            <div className="attribute-item">
                                <div className="text-prod-name">核算数量：</div>
                                <p className="query-show">{this.data.productAccountingQuantity}</p>
                            </div>
                            <div className="attribute-item">
                                <div className="text-prod-name">单位成本：</div>
                                <p className="query-show">{(this.data.productProcessingCost/this.data.productAccountingQuantity).toFixed(2)}</p>
                            </div>
                            <div className="attribute-item">
                                <div className="text-prod-name">附加信息：</div>
                                <p className="query-show">{this.data.productSeriesFunction}</p>
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
                            <div className="selection-body">
                                {this.setSelectionBody(this.state.selectedItem)}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}