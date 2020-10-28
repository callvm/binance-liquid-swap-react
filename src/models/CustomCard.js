import 'bootstrap/dist/css/bootstrap.min.css';
import './custom-card.css'
import { Card } from 'react-bootstrap';

const CustomCard = ({ data }) => {

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
        <>
            <Card className="custom-card">
                <h4>{data.name}</h4>
                <hr />
                <p id="daily">Daily</p>
                <p className="perc">{colorCell(data.daily)}</p>
                <p id="weekly">Weekly</p>
                <p className="perc">{colorCell(data.weekly)}</p>
                <hr />
                <table>
                    <tbody>
                        <tr>
                            <td className="link-left">
                                <a href="#">Chart</a>
                            </td>
                            <td className="link-right">
                                <a href="#">Stats</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Card>
        </>
    )
}

export default CustomCard