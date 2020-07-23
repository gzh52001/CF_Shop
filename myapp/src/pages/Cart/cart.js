import React from 'react';
import { Empty, Button } from 'antd';
import './style.scss';
class Cart extends React.Component {
    goto = (path) => {
        this.props.history.push(path);
    }
    render() {

        return (
            <div className="cart_zx">
                <Empty
                    image="https://f6.jmstatic.com/static_cart_mobile/images/no-card-oops.png"
                    imageStyle={{
                        height: 150,
                    }}
                    description={
                        <span>
                            购物车好空呀，快去选购吧~
        </span>
                    }
                >
                    <Button type="primary" onClick={this.goto.bind(this, '/sort')}>去逛逛</Button>
                </Empty>,
            </div>
        )
    }
}
export default Cart;