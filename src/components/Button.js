import React, {useState} from 'react';

const Button = () => {
  const [showAnotherButton, setShowAnotherButton] = useState(false);
  
  return (
    <div>
      <button
        data-testid="button"
        onClick={()=> {setShowAnotherButton(true)
        }}
        >
          CLICK ME!
        </button>
        {showAnotherButton && (
          <button data-testid="button"> HELLO!</button>
        )}
    </div>
  );
}

export default Button;