import React, { memo } from 'react';

import { useSelector, useDispatch} from 'react-redux';
import { getLoadTourList } from '../slices/LoadTourSlice';

import styled from 'styled-components';
import Pagination from 'react-mui-pagination';
import Collapsible from 'react-collapsible';
import ErrorView from '../components/ErrorView';

const LoadTourContainer = styled.div`
    width: 80%;
    min-height: 70vh;
    margin: 50px auto;

    h1{
        text-align: center;
        margin: 50px 0;
    }

    .Collapsible{
        font-size: 25px;
        
        //span태그로 구성되어 있음
        .Collapsible__trigger{
            box-sizing: border-box;
            border-radius: 10px;
            display: block;
            width: 100%;
            height: 70px;
            line-height: 70px;
            padding-left: 20px;
            background-color: #337ab7;
            color: white;
            margin: 5px;
        }

        p{
            padding: 0 20px;
            /* font-size: 20px; */
            line-height: 35px;
            margin: 20px 0;
            
        }
    }
    .pagination{
        margin: 30px 0;
        text-align: center;
    }   
`;

const LoadTour = memo(() => {
    const dispatch = useDispatch();
    const {data, loading, error} = useSelector((state)=>state.loadTour);

    const [page, setMyPage] = React.useState(1); // this an example using hooks
    const setPage = (e, p) => {
    setMyPage(p);
    }

    React.useEffect(()=>{
        dispatch(getLoadTourList({page:page}))
    },[dispatch,page])
    
    // console.log(data);
    return (
        <LoadTourContainer>
            {
                // JSON.stringify(data)
                loading? "loading":(
                    error? <ErrorView error={error}/>:(
                        <>  
                            <h1>전국 걷기여행길 </h1>
                            {
                                data?.items.item.map((v, i)=>{
                                    return(
                                        <Collapsible key={i} trigger={v.themeNm}>
                                            <p dangerouslySetInnerHTML={{__html:v.themedesc}}></p>
                                        </Collapsible>
                                    )
                                })
                            }
                            <div className='pagination'>
                            {
                                data?.totalCount && <Pagination page={page} setPage={setPage} total={data.totalCount} numOfLinks={10} />
                            }
                            </div>
                        </>
                    )
                )
            }
        </LoadTourContainer>
    );
});

export default LoadTour;