import StatisticLine from "./StatisticLine";

const Statistic = ({good, neutral, bad, total, Average, Positive}) => {
    
    if(!good && !neutral && !bad  ) return <p>No feedback given</p>
    
    return(
        <table>
            <tbody>
            <StatisticLine text={"good"} value={good}/>
            <StatisticLine text={"neutral"}  value={neutral}/>
            <StatisticLine text={"bad"} value={bad}/>
            <StatisticLine text={"all"} value={total}/>
            <StatisticLine text={"avergae"} value={Average}/>
            <StatisticLine text={"positive"} value={Positive}/>
            </tbody>  
        </table>
    )
}

export default Statistic;