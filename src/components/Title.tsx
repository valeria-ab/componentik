import React from 'react';
import Checkbox from './Checkbox';
import s from './CommonStyles.module.css'


function Title(props: {title:string}) {

    return (
        <div className={s.titleBlock}>
            <Checkbox/>
            <span className={s.title}>{props.title}</span>
        </div>
    );
}

export default Title;
