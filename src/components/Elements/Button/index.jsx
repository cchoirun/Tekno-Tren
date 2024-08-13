import React from 'react';

const  Button = (props) => {
  const {children, variant="bg-blue-700"} = props;
  return (
    <button
      className={`${variant} text-white font-bold py-2 px-4 rounded`}
    >
      {children}
    </button>
  );
}

export default Button;
