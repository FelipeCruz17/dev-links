import styled from 'styled-components'

export const ListContainer = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    gap: 16px;

    padding: 24px 0;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 16px 24px;

    font-weight: 500;
    line-height: 24px;

    background: ${(props) => props.theme.colors.surfaceColor};
    border: 1px solid;
    border-color: ${(props) => props.theme.colors.strokeColor};
    border-radius: 8px;

    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);

    transition: background 0.3s;

    &:hover {
      background: ${(props) => props.theme.colors.surfaceColorHover};
      border: 1px solid ${(props) => props.theme.colors.textColor};
    }
  }
`
