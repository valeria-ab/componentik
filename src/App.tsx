import React from 'react';
import Title from './components/Title';
import Main from './components/Main';
import Button from './components/Button';
import './App.css'

function App() {
    const onClick = () => {
        alert('на меня нажали')
    }

    return (
            <div className="App">
                <Title title={'Become the Dungeon Master'}/>
                <Main body={'Do the primary task or die! '}/>
                <Button onClick={onClick}/>
            </div>
    );
}

export default App;
