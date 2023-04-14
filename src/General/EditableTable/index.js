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
                        <th>{this.props.tableHeadZh}</th>
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
                                            (event) => {
                                                this.tempData[indexBody - 1][this.props.tableBody] = event.target.value;
                                                this.setState({data:this.tempData});
                                            }
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
                                            this.tempData = this.tempData.filter((item) => item[this.props.identifier+"Id"] != this.tempData[indexDelete-1][this.props.identifier+"Id"]);
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