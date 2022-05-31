import { configureStore } from "@reduxjs/toolkit";

import TravelSlice from "./slices/TravelSlice";
import PetTravelSlice from "./slices/PetTravelSlice";
import LoadTourSlice from "./slices/LoadTourSlice";

const store = configureStore({
    reducer:{
        Travel : TravelSlice,
        pettravel: PetTravelSlice,
        loadTour: LoadTourSlice
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware({serializableCheck: false}),
    devTools: true
})

export default store;