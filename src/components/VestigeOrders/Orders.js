import React from 'react';

const Orders = (props) => {
    
    const order = props.order;
    
    const parfums = order.cartList.map((cur, ind) => {
        return <p>{cur.parfumData.parfumData.brand} - {cur.parfumData.parfumData.names.UI} | 
        {cur.parfumData.activePrice.ml} -  {cur.parfumData.activePrice.price}</p>
    })

    return <div style={{border: "1px solid black", margin: "10px", textAlign: "center", padding: "20px",
    fontSize: "16px"}}>
        <h3>{order.userInfo.name}</h3>
        <h3>{order.userInfo.adress} {order.userInfo.city}</h3>
        <h3>{order.userInfo.tel}</h3>
        <h3>{order.userInfo.email}</h3>
        <h3>{order.money.total}</h3>
        <h3>{order.country}</h3>
        <h3>{order.time.date}, {order.time.time}</h3>
        <h3>{order.orderID}</h3>
        <h3>{ parfums }</h3>
    </div>

}

export default Orders