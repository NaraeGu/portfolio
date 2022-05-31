import React, { memo } from 'react';
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

// 라이브러리
import { Table } from "semantic-ui-react";
import Pagination from 'react-js-pagination';

// 슬라이스
import { TravelList } from "../slices/TravelSlice";

// 컴포넌트
import Spinner from "../components/Spinner";
import ErrorView from "../components/ErrorView";

const TravelStyle = styled.div`
    width: 90%;
    margin: 0 auto;
    padding-top: 20px;
    padding-bottom: 40px;

    h2 {
        padding-top: 20px;
        padding-bottom: 20px;
        text-align: center;
        color: #337ab7;
    }

    select {
        width: 120px;
        height: 28px;
        margin-bottom: 20px;
        padding: 2px;
    }

    .pagination {
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    ul.pagination li {
        display: inline-block;
        width: 30px;
        height: 30px;
        border: 1px solid #e2e2e2;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
    }

    ul.pagination li:first-child {
        border-radius: 5px 0 0 5px;
    }

    ul.pagination li:last-child {
        border-radius: 0 5px 5px 0;
    }

    ul.pagination li a {
        text-decoration: none;
        color: #337ab7;
        font-size: 1rem;
    }

    ul.pagination li.active a {
        color: white;
    }

    ul.pagination li.active {
        background-color: #337ab7;
    }

    ul.pagination li a:hover,
    ul.pagination li a.active {
        color: blue;
    }

    .page-selection {
        width: 48px;
        height: 30px;
        color: #337ab7;
    }
`;

const Travel = memo(() => {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.Travel);

    // 페이지 셋팅
    const [page, setPage] = React.useState(1);

    // 페이지 버튼 이벤트 핸들러
    const handlePageChange = (page) => {
        setPage(page);
    };

    // 페이지 이동 이벤트 핸들러
    React.useEffect(() => {
        dispatch(TravelList({
            page: page,
            })
        )
    }, [dispatch, page]);

    return (
        <div>
            <Spinner visible={loading} />
            {error ? (
                <ErrorView error={error} />
            ) : (
                data && (
                    <TravelStyle>
                        <h2>한국관광공사 선정 아름다운 국내 관광지 8000</h2>
                        <Table celled selectable>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>대분류</Table.HeaderCell>
                                    <Table.HeaderCell>중분류</Table.HeaderCell>
                                    <Table.HeaderCell>소분류</Table.HeaderCell>
                                    <Table.HeaderCell>정보명</Table.HeaderCell>
                                    <Table.HeaderCell>지역</Table.HeaderCell>
                                    <Table.HeaderCell>시군</Table.HeaderCell>
                                    <Table.HeaderCell>읍면동</Table.HeaderCell>
                                    <Table.HeaderCell>주소</Table.HeaderCell>
                                    <Table.HeaderCell>문의 및 안내</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {data &&
                                    data.map((v, i) => {
                                        return (
                                            <Table.Row key={i}>
                                                <Table.Cell>
                                                    {v.대분류}
                                                </Table.Cell>
                                                <Table.Cell>
                                                    {v.중분류}
                                                </Table.Cell>
                                                <Table.Cell>
                                                    {v.소분류}
                                                </Table.Cell>
                                                <Table.Cell>
                                                    {v.정보명}
                                                </Table.Cell>
                                                <Table.Cell>
                                                    {v.지역}
                                                </Table.Cell>
                                                <Table.Cell>
                                                    {v.시군}
                                                </Table.Cell>
                                                <Table.Cell>
                                                    {v.읍면동}
                                                </Table.Cell>
                                                <Table.Cell>
                                                    {v.주소}
                                                </Table.Cell>
                                                <Table.Cell>
                                                    {v.문의및안내}
                                                </Table.Cell>
                                            </Table.Row>
                                        )
                                    })}
                            </Table.Body>
                        </Table>
                        <div className="pagination">
                            {
                                data &&
                                <Pagination
                                activePage={page}
                                itemsCountPerPage={120}
                                totalItemsCount={8035}
                                pageRangeDisplayed={10}
                                prevPageText={"‹"}
                                nextPageText={"›"}
                                onChange={handlePageChange}
                              />
                            }

                        </div>
                    </TravelStyle>
                )
            )}
        </div>
    );
});

export default Travel;
