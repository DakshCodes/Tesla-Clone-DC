import { configureStore } from '@reduxjs/toolkit';
import carReducer from '../features/car/car.Slice'


export const store = configureStore({
    reducer:{
        car: carReducer
    },
});