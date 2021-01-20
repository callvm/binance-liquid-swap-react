import 'bootstrap/dist/css/bootstrap.min.css';
import './custom-card.css'
import { Card } from 'react-bootstrap';
import Arrow from './Arrow'

const CustomCard = ({ data }) => {

    let chart = `/chart/${data.name.replace('/', '-')}`
    let stats = `/stats/${data.name.replace('/', '-')}`

    let weeklyAverage = 0
    data.sevenDayTrend.forEach(day => weeklyAverage += day.amount)
    weeklyAverage /= 7

    let colorCell = (number) => {
        let num = (Number(number) * 100).toFixed(2)
        if (num > 0) {
            return (
                <span style={{ color: "green" }}>
                    <Arrow color='green' />{num}%
                </span>
            )
        } else {
            return (
                <span style={{ color: "red" }}>
                    <Arrow color='red' />{Math.abs(num)}%
                </span>
            )
        }
    }

    return (
        <>
            <Card className="custom-card" style={{ cursor: 'pointer' }}>
                
                    <h4>{data.name}</h4>
                    <hr />
                    <p id="daily">Daily</p>
                    <p className="perc">{colorCell(data.daily)}</p>
                    <p id="weekly">Weekly</p>
                    <p className="perc">{colorCell(weeklyAverage)}</p>
                    <hr style={{ marginBottom: "6px" }} />
                    <table>
                        <tbody>
                            <tr>
                                <td className="link-left">
                                    <a href={chart}>Chart</a>
                                </td>
                                <td className="link-right">
                                    <a href={stats}>Stats</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
               
            </Card>
        </>
    )
}

export default CustomCard