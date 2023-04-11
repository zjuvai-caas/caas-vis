import './index.css';

import React from 'react';
import AntSelect from '../../AntdComp/SelectAntd';

export default function PageProductAdd() {
    return (
        <div className="page-body-add">
            <div className="data-page-add">
                <div className="table-bar-add">
                    <div className="table-head-add">编辑产品项</div>
                </div>
                <div className="table-main-add">
                    <div className="prod-attribute-add">
                        <div className="attribute-item-add">
                            <div className="text-prod-name-add">产品名称：</div>
                            <input type="text" className="select-name-add" placeholder="请输入产品完整名称"></input>
                            <div className="input-highlight"></div>
                        </div>
                        <div className="attribute-item-add">
                            <div className="text-prod-name-add">产品编号：</div>
                            <input type="text" className="select-name-add" placeholder="请输入产品编号"></input>
                            <div className="input-highlight"></div>
                        </div>
                        <div className="attribute-item-add">
                            <div className="text-prod-name-add">产品系列：</div>
                            <div className="select-name-add"><AntSelect placeholder="(无)"></AntSelect></div>
                        </div>
                        <div className="attribute-item-add">
                            <div className="text-prod-name-add">加工成本：</div>
                            <input type="text" className="select-name-add" placeholder="请输入加工成本，默认为0"></input>
                        </div>
                        <div className="attribute-item-add">
                            <div className="text-prod-name-add">核算数量：</div>
                            <input type="text" className="select-name-add" placeholder="一批产品数默认为1"></input>
                        </div>
                        <div className="attribute-item-add">
                            <div className="text-prod-name-add">附加信息：</div>
                        </div>
                        <textarea className="attach-info" placeholder="请输入附加信息"></textarea>
                    </div>
                    <div className="input-data-add">

                    </div>
                </div>
                <div className="table-footer-add">

                </div>
            </div>

        </div>
    );
}