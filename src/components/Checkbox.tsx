import React, {useState} from 'react';
import s from './CommonStyles.module.css'

function Checkbox() {
const [checked, setChecked] = useState(false)
    return (
            <div className={!checked? s.checkbox : s.after} onClick={() => setChecked(!checked)}> </div>
    );
}

export default Checkbox;
