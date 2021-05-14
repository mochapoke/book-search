import styled from 'styled-components';

export const LeftWrapper = styled.header`
  display: none;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.body60};
  border-right: 1px solid ${(props) => props.theme.colors.border};

  ${(props) => props.theme.media.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 150px;
  }

  ${(props) => props.theme.media.desktop} {
    align-items: flex-end;
    width: 450px;
  }
`;

export const UpperWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 10vh;
  min-height: 60px;
  background-color: ${(props) => props.theme.colors.body60};
  border-bottom: 1px solid ${(props) => props.theme.colors.border};

  &.goback {
    justify-content: flex-start;
    .icons {
      font-size: 1.2rem;
    }
  }
`;

export const ButtonWrapper = styled.div`
  margin-left: 1.2rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  ${(props) => props.theme.media.tablet} {
    margin-right: 2rem;
  }
`;

export const RightWrapper = styled.div`
  display: none;
  height: 100vh;
  width: 100%;
  border-left: 1px solid ${(props) => props.theme.colors.border};

  ${(props) => props.theme.media.desktop} {
    display: flex;
  }
`;
