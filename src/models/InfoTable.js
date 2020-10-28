import 'bootstrap/dist/css/bootstrap.min.css';
import './info-table.css'
import { Table } from 'react-bootstrap';

const InfoTable = ({data}) => {

    if (data) {
        return (
            <>
                <h4 className="table-heading">Pool Summary</h4>
                <div className="table-div">

                    <Table hover className="info-table ">
                        <thead>
                            <tr>
                                <th className="table-left">Name</th>
                                <th>Total</th>
                                <th>Daily</th>
                                <th>Weekly</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data[data.length - 1].pools.map(pool => {

                                let total = Number(pool.coins[0].amount) + Number(pool.coins[1].amount)
                                
                                let colorCell = (number) => {
                                    let num = (Number(number) * 100).toFixed(2)
                                    if (num > 0) {
                                        return (
                                            <span style={{color : "green"}}>{num}%</span>
                                        )
                                    } else {
                                        return (
                                            <span style={{color : "red"}}>{num}%</span>
                                        )
                                    }
                                }

                                return (
                                    <tr key={pool.name}>
                                        <td className="table-left"><a href="#">{pool.name}</a></td>
                                        <td>${total.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                                        <td>{colorCell(pool.daily)}</td>
                                        <td>{colorCell(pool.weekly)}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </div>
            </>
        )
    } else {
        return (<> </>)
    }


}

export default InfoTable