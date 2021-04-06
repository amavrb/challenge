import React, { useEffect, useState } from 'react';
import { CircularProgress, Grid } from '@material-ui/core';

import { get } from '~api/apiUtils';
import { EmployeesList } from '~api/types';

import { EmployeeGrid } from './EmployeeGrid';
import { Filter } from './Filter';


export const EmployeeSearchContent = () => {
  const [currentList, setCurrentList] = useState<EmployeesList>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const fetchEmployees = async () => {
    setLoading(true);
    try {
      const data = await get('/employees');
      localStorage.setItem('data', JSON.stringify(data));
      setCurrentList(data);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  if (currentList.length === 0) {
    return <div>No available data</div>;
  }

  return (
    <Grid container direction="column" spacing={3}>
      <Grid item xs={12}>
        <Filter setCurrentList={setCurrentList} currentList={currentList}  />
      </Grid>
      <Grid item xs={12}>
        <EmployeeGrid employeesList={currentList} />
      </Grid>
    </Grid>
  );
};
