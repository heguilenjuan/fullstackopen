
const Part = (props) => {
    return (
        <p>
            {props.part} - {props.exercise}
        </p>
    )
}


const Content = (props) => {
    return(
        <>
            {props.parts.map((part,index) => {
                return <Part part={part.name} exercise={part.exercises} key={`part-${index}`}/>
            })}

        </>
    )
}

export default Content;