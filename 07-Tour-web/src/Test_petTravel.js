import React, { memo } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getPetTravel } from './slices/PetTravelSlice';

const Test_petTravel = memo(()=>{
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state)=>state.pettravel);

    React.useEffect(()=>{
        dispatch(getPetTravel({
            params: {
                partCode: 'PC01',
                page: 2,
                pageBlock: 10,
            }
        }))
    },[dispatch])

    return(
        loading ? "loading..." : (
            error ? JSON.stringify(error) : (
                <>
                    <h1>data</h1>
                    {JSON.stringify(data)}
                </>
            )
        )
    )
});

export default Test_petTravel;