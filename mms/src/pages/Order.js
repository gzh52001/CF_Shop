import React from 'react';
import { Table, Button } from 'antd';

import 'antd/dist/antd.css';

const columns = [
    {
        title: '订单号',
        dataIndex: 'orderNumber',
    },
    {
        title: '商品名称',
        dataIndex: 'goodsName',
    },
    {
        title: '订单金额',
        dataIndex: 'orderPrice',
    },
    {
        title: '订单状态',
        dataIndex: 'orderStatus',
    },
    {
        title: '发货状态',
        dataIndex: 'shipmentStatus',
    },
    {
        title: '支付状态',
        dataIndex: 'paymentStatus',
    },
    {
        title: '用户名',
        dataIndex: 'userName',
    },
    {
        title: '是否会员',
        dataIndex: 'level',
    },
    {
        title: '联系电话',
        dataIndex: 'phone',
    },
    {
        title: '下单时间',
        dataIndex: 'time',
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
        orderNumber: `100010001`,
        goodsName: `CF专属T恤 ${i + 1}`,
        orderPrice: `219.00`,
        orderStatus:`已确认`,
        shipmentStatus: `已发货`,
        paymentStatus: `已付款`,
        userName: `小芳 ${i + 1}`,
        level: `是`,
        phone: `10020003000`,
        time: `2020-7-24`,
        operation: <button>删除</button>
    });
}
class Order extends React.Component {
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

export default Order;