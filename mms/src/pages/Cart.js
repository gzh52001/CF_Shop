import React from 'react';
import { Table, Button } from 'antd';

import 'antd/dist/antd.css';

const columns = [
    {
        title: '商品编号',
        dataIndex: 'goodsNum',
    },
    {
        title: '商品名称',
        dataIndex: 'goodsName',
    },
    {
        title: '零售价',
        dataIndex: 'retailPrice',
    },
    {
        title: '进货价',
        dataIndex: 'buyPrice',
    },
    {
        title: '会员价',
        dataIndex: 'plusPrice',
    },
    {
        title: '库存',
        dataIndex: 'stock',
    },
    {
        title: '销量',
        dataIndex: 'sales',
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
        goodsNum: `10001`,
        goodsName: `CF专属背包 ${i + 1}`,
        retailPrice: `299.00`,
        buyPrice: `199.00`,
        plusPrice: `219.00`,
        stock: `100`,
        sales: `66`,
        operation: <button>删除</button>
    });
}
class Cart extends React.Component {
    state = {
        selectedRowKeys: [], 
        loading: false,
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

export default Cart;