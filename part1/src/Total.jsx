const Total = (props) => {

    const result = props.parts.reduce((acumulador, part) => {
        return acumulador + part.exercises
    }, 0)

    return(
        <p>Number of exercises {result}</p>
    )
}

export default Total;