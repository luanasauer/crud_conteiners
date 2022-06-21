import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Content } from './components/Content';
import { Menu } from './components/Menu';

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Menu />
        <Content />
      </div>
    </BrowserRouter>
  );
}

export default App; 