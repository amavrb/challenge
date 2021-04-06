import React from 'react';
import { Grid } from '@material-ui/core';

import { EmployeeCard } from './EmployeeCard';
import { EmployeesList } from '~api/types';

interface EmployeeGridProps {
  employeesList: EmployeesList;
}

export const EmployeeGrid = ({ employeesList }: EmployeeGridProps) => {
  return (
    <Grid container direction="row" spacing={3}>
      {employeesList.map((employee, index) => {
        const shouldShowCard = employee.published && employee.imagePortraitUrl;
        return (
          shouldShowCard && (
            <Grid
              item
              container
              xs={3}
              key={index}
              data-test={`employeeCard${index}`}
            >
              <EmployeeCard {...employee} />
            </Grid>
          )
        );
      })}
    </Grid>
  );
};
