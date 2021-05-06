import React, { useRef, useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { RootReducerType } from '../../reducer/store';
import SearchModule from './SearchModule';
import { loadMore } from '../../actions/book.actions.types';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 2rem 0 4rem 0;
  > div {
    margin-bottom: 1rem;
  }
`;

const SearchList: React.FC = () => {
  const { data, isLoading, hasMore, pageNumber } = useSelector(
    (state: RootReducerType) => state.bookReducer
  );
  const dispatch = useDispatch();
  const observer = useRef<IntersectionObserver | null>(null);
  const lastElement = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          dispatch(loadMore());
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore]
  );

  return (
    <ListContainer>
      {data?.map((item, index) => {
        if (data.length === index + 1) {
          return (
            <div ref={lastElement} key={item.isbn}>
              <SearchModule
                image={item.image}
                title={item.title}
                pubdate={item.pubdate}
                author={item.author}
                description={item.description}
              />
            </div>
          );
        } else {
          return (
            <div key={item.isbn}>
              <SearchModule
                image={item.image}
                title={item.title}
                pubdate={item.pubdate}
                author={item.author}
                description={item.description}
              />
            </div>
          );
        }
      })}

      {isLoading && hasMore && <div>데이터를 가져오는 중..</div>}
    </ListContainer>
  );
};

export default SearchList;
