import React, { useState } from 'react';
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  InputAdornment,
  makeStyles,
  MenuItem,
  Select,
  Theme,
  TextField,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import { EmployeesList } from '~api/types';

import {
  filterByEmployeeName,
  filterByOffice,
  sortByName,
  sortByOffice,
} from './utils';
import { SortOrder } from './types';

const useStyles = makeStyles(({ spacing }: Theme) => ({
  container: {
    marginTop: spacing(3),
  },
  showAllButton: {
    width: '100%',
    height: '100%',
  },
  dropdown: {
    // height: spacing(4),
  },
}));

interface IFilterProps {
  currentList: EmployeesList;
  setCurrentList: (filteredList: EmployeesList) => void;
}

export const Filter = ({ currentList, setCurrentList }: IFilterProps) => {
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
  const [sortOffice, setSortOffice] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');
  const classes = useStyles();
  const localStorageEmployeeList = JSON.parse(
    localStorage.getItem('data')!
  ) as EmployeesList;

  const handleSearchOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const performSearch = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const filteredEmployeeNameArray = filterByEmployeeName(
      localStorageEmployeeList,
      searchValue
    );
    const filteredEmployeeOfficeArray = filterByOffice(
      localStorageEmployeeList,
      searchValue
    );

    if (
      filteredEmployeeNameArray.length &&
      filteredEmployeeOfficeArray.length
    ) {
      setCurrentList([...filteredEmployeeNameArray, ...filteredEmployeeOfficeArray]);
    } else if (filteredEmployeeNameArray.length) {
      setCurrentList(filteredEmployeeNameArray);
    } else if (filteredEmployeeOfficeArray.length) {
      setCurrentList(filteredEmployeeOfficeArray);
    }
  };

  const handleSortOrderChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setSortOrder(event.target.value as SortOrder);
    if (sortOffice) {
      return setCurrentList(sortByOffice(currentList, sortOrder));
    }
    setCurrentList(sortByName(currentList, sortOrder));
  };

  const handleSortByOfficeChange = () => {
      setSortOffice(!sortOffice);
  };

  const resetEmployeeList = () => {
    setCurrentList(localStorageEmployeeList);
  };

  return (
    <Grid
      container
      spacing={3}
      direction="column"
      className={classes.container}
    >
      <form
        noValidate
        autoComplete="off"
        onSubmit={performSearch}
        data-test="filterSearchForm"
      >
        <Grid container spacing={2}>
          <Grid item xs={10}>
            <TextField
              id="filter"
              placeholder="Search for name or office..."
              value={searchValue}
              onChange={handleSearchOnChange}
              fullWidth
              data-test= "filterSearchInput"
              variant="outlined"
              inputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={2}>
            <Button
              className={classes.showAllButton}
              onClick={resetEmployeeList}
            >
              Show all
            </Button>
          </Grid>
        </Grid>
      </form>
      <Grid item container alignContent="center">
      <FormControlLabel
            label="Sort by office"
            labelPlacement="end"
            control={
              <Checkbox
                data-test="officeCheckbox"
                name="sortByOffice"
                checked={sortOffice}
                color="default"
                onChange={handleSortByOfficeChange}
              />
            }
          />
          <Select
            id="orderSelection"
            data-test="orderSelection"
            className={classes.dropdown}
            value={sortOrder}
            variant="outlined"
            onChange={handleSortOrderChange}
          >
            <MenuItem value={'asc'}>Ascending</MenuItem>
            <MenuItem value={'desc'}>Descending</MenuItem>
          </Select>

      </Grid>
    </Grid>
  );
};
