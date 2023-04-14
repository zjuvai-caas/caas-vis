import './index.css';
import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { ReloadOutlined } from '@ant-design/icons';
import { UnorderedListOutlined } from '@ant-design/icons';
import { PlusCircleFilled } from '@ant-design/icons';
import { DeleteFilled } from '@ant-design/icons';
import { DownloadOutlined } from '@ant-design/icons';
import { LoadingOutlined } from '@ant-design/icons';
import { Component } from 'react';
import axios from 'axios';
import PageProductDetail from '../PageProductDetail';
import PageProductAdd from '../PageProductAdd';
import { BlueButton } from '../../../General/BlueButton';
import { RedButton } from '../../../General/RedButton';

export default class PageProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productSeriesName: '',
            filterCakeName: '',
            rawMaterialName: '',
            searchResult: [],
            isAllSelected: false,
            isLoading: false,

            isOnDetail: false,
            isOnEdit: false,
            detailId: 0,
            editId: 0,
        }
        this.tempSelected = {};
    }

    reload = () => {
        this.setState({
            productSeriesName: '',
            filterCakeName: '',
            rawMaterialName: '',
            searchResult: [],
            isAllSelected: false,
        })
        this.tempSelected = {};
    }

    recordCheckBox = (id) => (event) => {
        this.tempSelected[id] = event.target.checked;
        let flag = event.target.checked;
        if (flag)
            for (let index in this.state.searchResult) {
                if (!this.tempSelected[this.state.searchResult[index].id]) {
                    flag = false;
                    break;
                }
            }
        this.setState({ isAllSelected: flag });
    }

    selectAll = (event) => {
        if (event.target.checked) {
            for (let key in this.state.searchResult)
                this.tempSelected[this.state.searchResult[key].id] = true;
        }
        else {
            for (let key in this.state.searchResult)
                this.tempSelected[this.state.searchResult[key].id] = false;
        }
        this.setState({
            isAllSelected: event.target.checked,
        });
    }

    deleteListItem = () => {
        this.setState(
            {
                searchResult: this.state.searchResult.filter((item) => !this.tempSelected[item.id]),
                isAllSelected: false,
            }
        )
        this.tempSelected = {};
    }

    fetchSearchResult = () => {
        let tempObj = {};
        if (this.state.productSeriesName)
            tempObj.productSeriesName = this.state.productSeriesName;
        if (this.state.filterCakeName)
            tempObj.filterCakeName = this.state.filterCakeName;
        if (this.state.rawMaterialName)
            tempObj.rawMaterialName = this.state.rawMaterialName;
        // if (Object.keys(tempObj).length === 0)
        //     return;
        this.setState({ isLoading: true });

        let tempParams = new URLSearchParams();
        tempParams.append('productSeriesName', tempObj.productSeriesName);
        tempParams.append('filterCakeName', tempObj.filterCakeName);
        tempParams.append('rawMaterialName', tempObj.rawMaterialName);
        console.log(tempParams.toString());
        console.log(tempObj);
        axios.get(
            // "http://localhost:3000/products",
            // "http://10.196.55.11:8080/productSeries/findAllProductSeries",
            // "http://10.162.109.94:8080/product/findAllByCondition",
            "http://10.196.55.11:8080/product/findAllByCondition",
            {
                // params: tempObj,
                params: tempParams,

            }
        ).then((response) => {
            console.log(response);
            this.setState({
                searchResult: response.data,
                isAllSelected: false,
                isLoading: false,
            });
            // console.log(tempResult);
        })
    }

    deleteItemInDB = () => {

    }

    editItemInDB = () => {
        this.setState({ isOnEdit: true })
    }

    showDetail = () => {
        this.setState({ isOnDetail: true })
    }

    backToProductList = () => {
        this.setState({
            isOnEdit: false,
            isOnDetail: false,
        })
    }

    render() {
        if (this.state.isOnDetail)
            return <PageProductDetail data={this.state.searchResult[0]} backToProductList = {this.backToProductList}></PageProductDetail>;
        if (this.state.isOnEdit)
            return <PageProductAdd data={this.state.searchResult[0]} backToProductList = {this.backToProductList}></PageProductAdd>;

        let index = 1;
        return (
            <div className="page-body-list">
                <div className="search-bar">
                    <div className="search-item-collection">
                        <div className="Search-item">
                            <span className="search-text">系列名称：</span>
                            <input
                                type="text"
                                placeholder="输入系列名称查询（可选）"
                                value={this.state.productSeriesName}
                                className="search-term"
                                onChange={(event) => this.setState({ productSeriesName: event.target.value })}
                            />
                        </div>
                        <div className="Search-item">
                            <span className="search-text">滤饼名称：</span>
                            <input
                                type="text"
                                placeholder="输入滤饼名称查询（可选）"
                                value={this.state.filterCakeName}
                                className="search-term"
                                onChange={(event) => this.setState({ filterCakeName: event.target.value })}
                            />
                        </div>
                        <div className="Search-item">
                            <span className="search-text">原料名称：</span>
                            <input
                                type="text"
                                placeholder="输入原料名称查询（可选）"
                                value={this.state.rawMaterialName}
                                className="search-term"
                                onChange={(event) => this.setState({ rawMaterialName: event.target.value })}
                            />
                        </div>
                    </div>
                    <div className="selection-bar">
                        <div onClick={this.fetchSearchResult} style={{'margin-right':'20px'}}>
                            <BlueButton 
                                Component={SearchOutlined}
                                text="搜 索"
                            />
                        </div>
                        <div onClick={this.reload}>
                            <RedButton
                                Component={ReloadOutlined}
                                text="重 置"
                            />
                        </div>
                    </div>
                </div>
                <div className="data-list-page">
                    <div className="operate-bar">
                        <div className="list-table-head">
                            <UnorderedListOutlined className="unordered-list-outlined" />
                            <div className="data-list-text">数据列表</div>
                        </div>
                        <div>
                            <BlueButton
                                Component={PlusCircleFilled}
                                text="新 增"
                            />
                        </div>
                        <div style={{ 'margin-left': '27px' }} onClick={this.deleteListItem}>
                            <RedButton
                                Component={DeleteFilled}
                                text="删 除"
                            />
                        </div>
                        <div style={{ 'margin-left': '1085px' }}>
                            <BlueButton
                                Component={DownloadOutlined}
                                text="下 载"
                            />
                        </div>
                    </div>
                    <div className="list-frame-head">
                        <table>
                            <thead className="table-head-list">
                                <tr>
                                    <th width="5%">
                                        <input
                                            type="checkbox"
                                            onChange={this.selectAll}
                                            checked={this.state.isAllSelected}
                                        /></th>
                                    <th width="5%">序号</th>
                                    <th width="10%">产品名称</th>
                                    <th width="10%">产品编号</th>
                                    <th width="10%">产品系列</th>
                                    <th width="10%">产品单价</th>
                                    <th width="10%">近期涨幅</th>
                                    <th width="20%">附加信息</th>
                                    <th width="20%">操作</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    {this.state.isLoading ?
                        <div className="loading"><LoadingOutlined /></div>
                        :
                        <div className="list-frame-body">
                            <table>
                                <tbody>
                                    {this.state.searchResult ? this.state.searchResult.map((product) => {
                                        product.id = index;
                                        return (
                                            <tr key={product.id}>
                                                <td width="5%">
                                                    <input
                                                        type="checkbox"
                                                        onChange={this.recordCheckBox(product.id)}
                                                        //添加了下面这一行之后，必须要setState()重新渲染，不然点击复选框颜色的选中颜色不会变
                                                        checked={this.tempSelected[product.id]}
                                                    /></td>
                                                <td width="5%">{index++}</td>
                                                <td width="10%">{product.productName}</td>
                                                <td width="10%">{product.productIndex}</td>
                                                {/* <td width="10%">{product.productName}</td>
                                                <td width="10%">******</td> */}
                                                <td width="10%">{product.productSeriesId}</td>
                                                <td width="10%">{(product.productProcessingCost / product.productAccountingQuantity).toFixed(2)}</td>
                                                {/* <td width="10%">{product.costPer}</td> */}
                                                <td width="10%">2%</td>
                                                <td width="20%">{product.productFactoryName}</td>
                                                {/* <td width="20%">{product.attachInfo}</td> */}
                                                <td width="20%">
                                                    <button
                                                        onClick={this.deleteItemInDB}
                                                    >删除</button>
                                                    <button
                                                        onClick={this.editItemInDB}
                                                    >编辑</button>
                                                    <button
                                                        onClick={this.showDetail}
                                                    >查看详细信息</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                    )
                                        : <tr></tr>
                                    }
                                </tbody>
                            </table>
                        </div>
                    }
                </div>
            </div >
        );
    };
}


