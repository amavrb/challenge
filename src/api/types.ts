export interface Employee {
  email: string;
  gitHub?: string;
  highlighted?: boolean;
  imagePortraitUrl?: string;
  imageWallOfLeetUrl?: string;
  linkedIn?: string;
  mainText?: string;
  manager?: string;
  name: string;
  office?: string;
  orgUnit?: string;
  phoneNumber?: string;
  published?: boolean;
  stackOverflow?: string;
  twitter?: string;
}

export type EmployeesList = Employee[];

export type EmployeesResponse = Employee[];
