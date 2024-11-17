import React, { useState } from 'react';

const HistoryOrders = () => {
    const [orders, setOrders] = useState([]);
    const [newOrder, setNewOrder] = useState('');

    const handleAddOrder = () => {
        if (newOrder.trim()) {
            setOrders([...orders, newOrder]);
            setNewOrder('');
        }
    };

    const handleRemoveOrder = (index) => {
        const updatedOrders = orders.filter((_, i) => i !== index);
        setOrders(updatedOrders);
    };

    return (
        <div>
            <h1>Orders</h1>
            <input
                type="text"
                value={newOrder}
                onChange={(e) => setNewOrder(e.target.value)}
                placeholder="Enter new order"
            />
            <button onClick={handleAddOrder}>Add Order</button>
            <ul>
                {orders.map((order, index) => (
                    <li key={index}>
                        {order}
                        <button onClick={() => handleRemoveOrder(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Orders;