import React from 'react';
import Trades from './Trades/Trades'
import Sidebar from './Sidebar'
import Pagination from '@mui/material/Pagination';

const LandingPage = () => {
  return (
    <>
      <div id="landing-page">
        <Sidebar />
        <div id="trade-container">
          <Trades />
        </div>
        <Pagination count={10} sx={{pt: '10px', pb: '10px'}}/>
      </div>
    </>
  );
};

export default LandingPage;