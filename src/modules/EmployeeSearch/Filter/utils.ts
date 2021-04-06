import { EmployeesList } from '~api/types';

import { SortOrder } from './types';

export const filterByEmployeeName = (
  employeesList: EmployeesList,
  searchValue: string
) => {
  const filteredEmployeeArray = [...employeesList].filter((employee) => {
    const employeeNames = employee.name.toUpperCase().split(' ');
    return employeeNames.includes(searchValue.toUpperCase());
  });
  return filteredEmployeeArray;
};

export const filterByOffice = (
  employeesList: EmployeesList,
  searchValue: string
) => {
  const filteredEmployeeArray = [...employeesList].filter((employee) => {
    const employeeOffice = employee.office?.toUpperCase() || '';
    return employeeOffice.includes(searchValue.toUpperCase());
  });
  return filteredEmployeeArray;
};

export const sortByName = (
  employeesList: EmployeesList,
  sortOrder: SortOrder
) => {
  const sortedNameArray = [...employeesList].sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return sortOrder === 'asc' ? 1 : -1;
    }
    if (nameA > nameB) {
      return sortOrder === 'asc' ? -1 : 1;
    }
    return 0;
  });
  return sortedNameArray;
};

export const sortByOffice = (
  employeesList: EmployeesList,
  sortOrder: SortOrder
) => {
  const sortedOfficeArray = [...employeesList].sort((a, b) => {
    const officeA = a.office?.toUpperCase() || '';
    const officeB = b.office?.toUpperCase() || '';
    if (officeA < officeB) {
      return sortOrder === 'asc' ? 1 : -1;
    }
    if (officeA > officeB) {
      return sortOrder === 'asc' ? -1 : 1;
    }
    return 0;
  });
  return sortedOfficeArray;
};
