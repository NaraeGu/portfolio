import React, {memo} from 'react';

import { useSelector, useDispatch} from 'react-redux';
import { getLoadTourList } from './slices/LoadTourSlice';

const Test_loadTour = memo(()=>{
    const dispatch = useDispatch();
    const {resultCode,resultMsg,numOfRows,pageNo,totalCount,routeIdx,themeNm,linemsg,themedescs,brdDiv,createdtime,modifiedtime,loading, error} = useSelector((state)=>state.loadTour);

    React.useEffect(()=>{
        dispatch(getLoadTourList())
    },[dispatch])

    return(
        loading? "loading..." : (
            error? JSON.stringify(error) : (
                <>
                    <h1>data</h1>
                    {JSON.stringify(resultCode)}
                </>
            )
        )
    )
});

export default Test_loadTour;