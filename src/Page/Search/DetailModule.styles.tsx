import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  max-width: 700px;
`;

export const StarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0rem 0 1.2rem 0;
`;

export const Title = styled.div`
  margin: 0 0 2rem 0;
  color: ${(props) => props.theme.colors.primary50};
`;

export const Link = styled.div`
  a {
    color: ${(props) => props.theme.colors.primary50};
    font-size: 1.2rem;
    text-decoration: none;
    :hover {
      color: ${(props) => props.theme.colors.primary60};
    }
    transition: color ease 0.5s;
  }

  margin-right: 1.5rem;
`;

export const SaveComment = styled.div`
  background-color: ${(props) => props.theme.colors.primary50};
  color: white;
  font-weight: bold;
  padding: 0.7em 1.5em;
  border-radius: 2rem;
  cursor: pointer;

  :hover {
    transition: all ease 0.5s;
    background-color: ${(props) => props.theme.colors.primary60};
  }
`;

export const Bar = styled.div`
  height: 100%;
  width: 1px;
  border-right: 1px solid ${(props) => props.theme.colors.ink20};
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem 0;
  word-break: keep-all;
  text-align: center;

  p {
    font-weight: bold;
    font-size: 0.8rem;
    margin-bottom: 0.3rem;
    color: ${(props) => props.theme.colors.ink40};
  }
  span {
    font-size: 0.7rem;
    color: ${(props) => props.theme.colors.ink30};
  }
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 500px;
  justify-content: space-around;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 1rem 0;

  ${(props) => props.theme.media.tablet} {
    width: 100%;
  }
`;
