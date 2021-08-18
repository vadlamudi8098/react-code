import React from 'react';
import './CircleWithLineComponent.css'
const CircleWithLineComponent = () => {

    return (
        <div className="horizontal-line-circle-container">
            <span className="horizontal-line" style={{ width: '20%', backgroundColor: 'green' }}></span>
            <span className="dot" style={{ left: '25%', backgroundColor: 'red' }}></span>
        </div>
    )
}
export default CircleWithLineComponent;