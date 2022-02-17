import React from 'react';
import s from './CommonStyles.module.css'

function Main(props: { body: string }) {

    return (
        <div className={s.main}>
            <span>{props.body}</span>
            <span>{props.body}</span>
            <span>{props.body}</span>
            <span>{props.body}</span>
            <span>{props.body}</span>
            <span>{props.body}</span>
            <span>{props.body}</span>
        </div>
    );
}

export default Main;
