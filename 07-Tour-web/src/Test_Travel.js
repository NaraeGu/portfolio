import React, { memo } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { KoreaTravelList } from './slices/KoreaTravelSlice';

const Test = memo(() => {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.koreatravel);

    React.useEffect(() => {
        dispatch(KoreaTravelList())
    }, [dispatch]);

    return (
        loading ? "loading..." : (
            error ? JSON.stringify(error) : (
                <div>
                    {JSON.stringify(data)}
                </div>
            )
        )
    );
});

export default Test;