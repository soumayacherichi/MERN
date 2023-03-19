import React from 'react'

const Display = (props) => {
    return (
        <fieldset>
            <legend>Display.jsx</legend>
            <h2>{JSON.stringify(props.user)}</h2>
        </fieldset>
  )
}

export default Display