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
    const queryString = qs.stringify({
        page
    });
    return `/main/?${queryString}`;
};

const Pagination = ({ page,lastPage }) => {
    console.log('pagenation', page, lastPage);
  return (
    <PaginationBlock>
    <Button
        disabled={page === 1}
        to={page === 1 ? undefined : buildLink({page:page - 1} )}
      >
        이전
      </Button>
      <PageNumber>{page}</PageNumber>
     <Button
        disabled={page === lastPage}
        to={
          page === lastPage
            ? undefined
            : buildLink({page:page + 1})
        }
      >
        다음
      </Button>
    </PaginationBlock>
  );
};
export default Pagination;
