import React from 'react'
import "../stylesFixer.css"

function HistoryPage(props) {

    return (
        <div style={{ width: '80%', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', fontSize:"1.5rem", fontFamily:"cursive" }}>
                <h1
                style={{marginBottom:"0"}}
                >History</h1>
            </div>
            <br />

            <table>
                <thead className='historyPageStyle'>
                    <tr 
                    style={{backgroundColor:"#b5edff"}}
                    >
                        <th>Payment Id</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Date of Purchase</th>
                    </tr>
                </thead>

                <tbody>

                    {props.user.userData && props.user.userData.history &&
                        props.user.userData.history.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                <td>{item.dateOfPurchase}</td>
                            </tr>
                        ))}


                </tbody>
            </table>
        </div>
    )
}

export default HistoryPage
