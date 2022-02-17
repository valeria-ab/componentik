import React from 'react';
import s from './CommonStyles.module.css'

function Button(props: {onClick: () => void}) {

    return (
        <div className={s.buttonComponent}>
            <button className={s.button} onClick={props.onClick}>iOS</button>
        </div>
    );
}

export default Button;
