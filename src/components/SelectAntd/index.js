import { Select } from 'antd';

const onChange = (value) => {
    console.log(`selected ${value}`);
};
const onSearch = (value) => {
    console.log('search:', value);
};
const AntSelect = (props) => {
    let {placeholder} = props;
    return (
        <Select
            showSearch
            style={{
                width: "100%",
                height: "100%"
            }}
            placeholder={placeholder}
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) =>
                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
            options={[
                {
                    value: 'YELLOW 6GS',
                    label: 'YELLOW 6GS',
                },
                {
                    value: 'YEL/BROWN AB',
                    label: 'YEL/BROWN AB',
                },
                {
                    value: 'RED HW-5',
                    label: 'RED HW-5',
                },
            ]}
        />
    );
}
export default AntSelect;