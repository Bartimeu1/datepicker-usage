import React from 'react';
import { DatePicker } from 'react-datepicker-light';

import { StyledApp } from './styled';

const App = () => {
  return (
    <StyledApp>
      <DatePicker viewType="year" holidays todos />
    </StyledApp>
  );
};

export default App;
