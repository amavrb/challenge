import React from 'react';
import { Container } from '@material-ui/core';

import { EmployeeSearchContent } from './modules';

export const App = () => {
  return (
    <Container maxWidth="lg">
      <EmployeeSearchContent />
    </Container>
  );
};
