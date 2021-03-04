import React from 'react'

const CardPage = (props, name, population) => {
    console.log(props);
    return (
        <div>
            <h1>{props.location.state.population}</h1>
        </div>
    )
}
export default CardPage;