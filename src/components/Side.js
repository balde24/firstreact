import React from 'react'
import Side_message from './Side_message'

export default function Side(props) {
    return (
        <div className = "side" style={{backgroundColor: props.color}}>
           <button> <Side_message   message={props.message}  /> </button>
            
        </div>
    )
}
