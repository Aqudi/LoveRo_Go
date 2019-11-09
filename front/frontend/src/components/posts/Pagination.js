import React from 'react';
import styled from 'styled-components';
import qs from 'qs';
import Button from '../common/Button';

const PaginationBlock = styled.div`
  width: 320px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
`;

const PageNumber = styled.div``;

const buildLink = ({page}) => {
  const query = qs.stringify({ page });
  return `/?${query}`;
};
// const goPage = ({url}) => {
//     const query = url.split('/')[4];
//     return query;
// };
const Pagination = ({ page,lastPage, prevPage, nextPage }) => {
  // const lastPage = (nextPage) =>{
  //     if(goPage({nextPage})===null){
  //         return lastPage;
  //     }
  //     return lastPage+1;
  // }
  return (
    <PaginationBlock>
    <Button
        disabled={page === 1}
        to={page === 1 ? undefined : buildLink({ page: page - 1 })}
      >
        {/*<Button disabled = {page ===1}
          to={page===1 ? undefined : goPage({prevPage}) } >*/}
        이전
      </Button>
      <PageNumber>{page}</PageNumber>
     <Button
        disabled={page === lastPage}
        to={
          page === lastPage
            ? undefined
            : buildLink({page: page + 1 })
        }
      >
   {/* <Button disabled = {page===lastPage}
        to = {page ===lastPage ? undefined : goPage({nextPage})}>*/}
        다음
      </Button>
    </PaginationBlock>
  );
};
export default Pagination;
