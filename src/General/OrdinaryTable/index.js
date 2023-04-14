import './index.css'

export default function OrdinaryTable(props) {
    let { tableHead, data } = props;
    let indexRow = 1;
    let indexColumn = 1;
    let indexTemp = 1;
    return (
        <table className="ordinary-table">
            <thead>
                <tr>
                    {tableHead.map(item =>
                        <th key={indexTemp++}>{item}</th>
                    )}
                </tr>
            </thead>
            <tbody>
                {
                    data.map(rowData =>
                        <tr key={indexRow++}>
                            {
                                tableHead.map(columnName => 
                                    <td key={indexColumn++}>{rowData[columnName]}</td>
                                )
                            }
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
}