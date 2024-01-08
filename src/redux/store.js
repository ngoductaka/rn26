import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user.slice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    // product: userReducer
  }
});


// {
//   user: {
//     name: 'dddd',
//     age: 33,
//     isLogin: true,
//   },
//   product: [
//     {
//       name: '',
//       price
//     }
//   ]
// }