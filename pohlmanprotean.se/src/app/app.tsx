import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import HomePage from './page';

const App: React.FC = () => {
  return (
    <Router>
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/" element={<HomePage />} /> {/* Use element prop */}
        <Route path="*" element={<div>404 Not Found</div>} /> {/* Use path="*" for catch-all */}
      </Routes>
    </Router>
  );
};

export default App;
