import { atom } from "jotai";

const storedToken = localStorage.getItem('token');
const storedRole = localStorage.getItem('role');
const storedAdminData = localStorage.getItem('adminData');
const storedDocData = localStorage.getItem('doctor');
const storedUserData = localStorage.getItem('user');
const storedIsLogin = localStorage.getItem('isLogin');

export const isLoginAtom = atom(storedIsLogin||false)
export const roleAtom = atom(storedRole || '');
export const tokkenAtom = atom(storedToken || '');
export const adminAtom = atom(JSON.parse(storedAdminData) || []);
export const doctorAtom = atom(JSON.parse(storedDocData) || []);
export const userAtom = atom(JSON.parse(storedUserData) || []);

// console.log(storedIsLogin)