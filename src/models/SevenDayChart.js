import React, { PureComponent } from 'react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';



const SevenDayChart = ({ data }) => {

    data = data.map(item => { return { 'uv': item.amount } })

    return (
        <>
            <div style={{ textAlign: "right" }}>
                <AreaChart style={{ marginRight: "0px", cursor: 'pointer' }}
                    width={180}
                    height={50}
                    data={data.reverse()}
                    margin={{
                        top: 0, right: 0, bottom: 0, left: 0,
                    }}

                >
                    <Tooltip/>
                    <Area type="basis" dataKey="uv" stroke="rgb(0, 132, 255, 0.3)" fill="rgb(0, 132, 255, 0.3)" strokeWidth={2} />
                </AreaChart>
            </div>
        </>
    )
}


export default SevenDayChart