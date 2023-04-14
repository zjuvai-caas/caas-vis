import './index.css';
import React, { Component } from 'react';
import EditableTable from '../../../General/EditableTable';
import { UnorderedListOutlined } from '@ant-design/icons';
import { PlusCircleFilled } from '@ant-design/icons';
import { CheckOutlined } from '@ant-design/icons';
import { CloseOutlined } from '@ant-design/icons';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { BlueButton } from '../../../General/BlueButton';
import { RedButton } from '../../../General/RedButton';


export default class PageProductAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
        };
        this.tempData = props.data;
    }

    render() {
        return (
            <div className="page-body-add">
                <div className="data-page-add">
                    <div className="table-bar-add">
                        <div className="table-head-add">编辑产品项</div>
                        {
                            this.props.data ?
                                <div onClick={() => this.props.backToProductList()}>
                                    <BlueButton
                                        Component={ArrowLeftOutlined}
                                        text="返 回"
                                    />
                                </div>
                                : ""
                        }

                    </div>
                    <div className="table-main-add">
                        <div className="prod-attribute-add">
                            <div className="attribute-item-add">
                                <div className="text-prod-name-add">产品名称：</div>
                                <input
                                    type="text"
                                    className="select-name-add"
                                    placeholder="请输入产品完整名称"
                                    value={this.state.data ? this.state.data.productName : ''}
                                    onChange={(event) => { this.tempData.productName = event.target.value; this.setState({ data: this.tempData }); }}
                                ></input>
                                <div className="input-highlight"></div>
                            </div>
                            <div className="attribute-item-add">
                                <div className="text-prod-name-add">产品编号：</div>
                                <input
                                    type="text"
                                    className="select-name-add"
                                    placeholder="请输入产品编号"
                                    value={this.state.data ? this.state.data.productIndex : ''}
                                    onChange={(event) => { this.tempData.productIndex = event.target.value; this.setState({ data: this.tempData }); }}
                                ></input>
                                <div className="input-highlight"></div>
                            </div>
                            <div className="attribute-item-add">
                                <div className="text-prod-name-add">产品系列：</div>
                                <input
                                    type="text"
                                    className="select-name-add"
                                    placeholder="请输入产品系列"
                                    value={this.state.data ? this.state.data.productSeriesId : ''}
                                    onChange={(event) => { this.tempData.productSeriesId = event.target.value; this.setState({ data: this.tempData }); }}
                                ></input>
                            </div>
                            <div className="attribute-item-add">
                                <div className="text-prod-name-add">加工成本：</div>
                                <input
                                    type="text"
                                    className="select-name-add"
                                    placeholder="请输入加工成本，默认为0"
                                    value={this.state.data ? this.state.data.productProcessingCost : ''}
                                    onChange={(event) => { this.tempData.productProcessingCost = event.target.value; this.setState({ data: this.tempData }); }}
                                ></input>
                            </div>
                            <div className="attribute-item-add">
                                <div className="text-prod-name-add">核算数量：</div>
                                <input
                                    type="text"
                                    className="select-name-add"
                                    placeholder="一批产品数默认为1"
                                    value={this.state.data ? this.state.data.productAccountingQuantity : ''}
                                    onChange={(event) => { this.tempData.productAccountingQuantity = event.target.value; this.setState({ data: this.tempData }); }}
                                ></input>
                            </div>
                            <div className="attribute-item-add">
                                <div className="text-prod-name-add">附加信息：</div>
                            </div>
                            <textarea className="attach-info" placeholder="请输入附加信息"></textarea>
                        </div>
                        <div className="input-data-add">
                            <div className="rawMaterial-relation">
                                <div className="rawMaterial-title">
                                    <UnorderedListOutlined className="unorder-list-outlined" />
                                    <span className="title-text">原料关联</span>
                                    <BlueButton
                                        Component={PlusCircleFilled}
                                        text="新 增"
                                    />
                                </div>
                                <EditableTable
                                    identifier="rawMaterial"
                                    tableHead="rawMaterialName"
                                    tableBody="rawMaterialPrice"
                                    tableHeadZh="原料名"
                                    tableBodyZh="投料量"
                                    data={this.state.data ? this.state.data.rawMaterialList : []}
                                ></EditableTable>
                            </div>

                            <div className="filterCake-relation">
                                <div className="rawMaterial-title">
                                    <UnorderedListOutlined className="unorder-list-outlined" />
                                    <span className="title-text">滤饼关联</span>
                                    <BlueButton
                                        Component={PlusCircleFilled}
                                        text="新 增"
                                    />
                                </div>
                                <EditableTable
                                    identifier="filterCake"
                                    tableHead="filterCakeName"
                                    tableBody="filterCakeAccountingQuantity"
                                    tableHeadZh="滤饼名"
                                    tableBodyZh="投料量"
                                    data={this.state.data ? this.state.data.filterCakeList : []}
                                ></EditableTable>
                            </div>
                            <div className="price-sery"></div>
                        </div>
                    </div>
                    <div className="table-footer-add">
                        <div style={{ 'margin-right': '47px' }}>
                            <BlueButton
                                Component={CheckOutlined}
                                text="确 定"
                            />
                        </div>
                        <div style={{ 'margin-right': "37px" }}>
                            <RedButton
                                Component={CloseOutlined}
                                text="取 消"
                            />
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}