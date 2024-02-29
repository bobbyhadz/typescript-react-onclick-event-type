import React from 'react';

const App = () => {
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    console.log(event.target);
    console.log(event.currentTarget);
  };

  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default App;
