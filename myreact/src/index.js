import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const P = React.createElement('p', null, 'Marina ne dronjaj')
console.log(P)
const Div = () => {
    return (
        <div className="Bugaric">{P}</div>
    )
}

ReactDOM.render(<Div />, document.getElementById('root'));


