import React from 'react';

const NextButton = ({changeQuote, color}) => {
    return (
        <div className="next-icon">
            <button onClick={changeQuote} className="arrow-button">
            <span className="material-icons-outlined" style={{ color: color }}>arrow_forward_ios</span>
        </button>
        
        
      </div>
    );
};

export default NextButton;