import React from 'react';
import { Table, Button } from 'antd';

import 'antd/dist/antd.css';
import mock from '../api/mock';

const columns = [
    {
        title: '编号',
        dataIndex: 'number',
    },
    {
        title: '会员编号',
        dataIndex: 'pulsNumber',
    },
    {
        title: '姓名',
        dataIndex: 'name',
    },
    {
        title: '年龄',
        dataIndex: 'age',
    },
    {
        title: '性别',
        dataIndex: 'address',
    },
    {
        title: '加入时间',
        dataIndex: 'join',
    },
    {
        title: '是否会员',
        dataIndex: 'level',
    },
    {
        title: '操作',
        dataIndex: 'operation',
    },

];

const data = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        number: `${i + 1}`,
        pulsNumber: `10001`,
        name: `小芳 ${i + 1}`,
        age: 32,
        address: `男`,
        join: `2020-7-24`,
        level: `是`,
        operation: <button>删除</button>
    });
}
class Plus extends React.Component {
    state = {
        selectedRowKeys: [], 
        loading: false,
        list:[]
    };

    start = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({
                selectedRowKeys: [],
                loading: false,
            });
        }, 1000);
    };

    onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    };

    async componentDidMount(){
        const vip = await mock.plusList();
        console.log(vip)
        this.setState({
            list:data
        })
    }

    render() {
        const { loading, selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;


        return (
            <div className="Plus">
                <div style={{ marginBottom: 16 }}>
                    <Button type="primary" onClick={this.start} disabled={!hasSelected} loading={loading}>
                        Reload
          </Button>
                    <span style={{ marginLeft: 8 }}>
                        {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                    </span>
                </div>
                <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
            </div>
        )
    }
}

export default Plus;