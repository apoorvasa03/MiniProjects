import './indicatorbar.css'

const IndicatorBar = () => {

    let barInfo = [
        {name : 'critical' , percentage: 250},
        {name : 'warning' , percentage: 150},
        {name : 'normal' , percentage: 100}
    ]
    let totalPer = 0
    barInfo.map(data => {
        totalPer += data.percentage
    })
    console.log(totalPer)
    return (
        <div className ='bar'>
            {barInfo.map(data => (
                <div className={data.name} style = {{flex: data.percentage/totalPer}} key={data.name}></div>
            ))}
        </div>
    )
}

export default IndicatorBar