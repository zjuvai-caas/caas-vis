import './index.css';
import { Component } from 'react';

export default class EditableTable extends Component {
    constructor(props) {
        super(props);
        this.state = { data: props.data };
        this.tempData = props.data;
    }
    render() {
        let indexBody = 0;
        let indexHead = 0;
        let indexDelete = 0;
        return (
            <table className="editable-table">
                <thead>
                    <tr>
                        <td>{this.props.tableHeadZh}</td>
                        {this.tempData.map(item =>
                            <th key={indexHead++}>{item[this.props.tableHead]}</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.props.tableBodyZh}</td>
                        {
                            this.tempData.map(item =>
                                <td key={indexBody++}>
                                    <input
                                        value={item[this.props.tableBody]}
                                        onChange={
                                            (value) => this.tempData[indexBody - 1][this.props.tableBody] = value
                                        }
                                    />
                                </td>
                            )
                        }
                    </tr>
                    <tr>
                        <td></td>
                        {
                            this.tempData.map(item =>
                                <td key={indexDelete++}>
                                    <button
                                        onClick={() => {
                                            //这里暂时写成rawMaterialId
                                            this.tempData = this.tempData.filter((item) => item.rawMaterialId != this.tempData[indexDelete-1].rawMaterialId);
                                            this.setState({ data: this.tempData });
                                        }}
                                    >删 除</button>
                                </td>
                            )
                        }
                    </tr>
                </tbody>
            </table>
        );
    }
}