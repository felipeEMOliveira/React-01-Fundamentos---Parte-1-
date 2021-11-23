import React from 'react';

import './Card.css'

export default (props) => {

    const estiloCard = {
        backgroundColor: props.cor,
        borderColor: props.cor
    }
    
    return(
        <div className='Title'>
            <div className='Title'>{props.titulo}</div>
            <div className='Content'>
                {props.children}
            </div>
        </div>
    )
}