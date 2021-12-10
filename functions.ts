import axios from "axios";

export const add = (num1: number, num2: number): number => {
  return num1 + num2;
};

export const isNull = (): null => {
  return null;
};

export interface User {
  firstName: string;
  lastName: string;
  age: number;
  isLoggedIn: boolean;
}

export const createUser = (): User => { 
  // could be database call or something like that
  const user = { firstName: "Joe", lastName: "Doe", age: 50, isLoggedIn: true };
  return user;
};

export const checkValue = (value: any) => value;

export const fetchUser = (): Promise<any> => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users/1")
    .then((res) => res.data)
    .catch((err) => console.log(err));  
};
 
export const fetchData = (): Promise<any> => {
  return axios 
    .get("https://jsonplaceholder.typicode.com/users/1")
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const fetchedNameToUppercaseName = (): Promise<any> => {
  return fetchData().then((data) => {
    return data.name.toUpperCase();
  });
};
