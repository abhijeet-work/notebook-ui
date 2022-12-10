import styled from "@emotion/styled";

export const HeaderWrapper = styled.header`
  width: 100%;
  padding: 15px 0;
  position: fixed;
  background-color: ${(props) => props.theme.backgrounds.header + "dd"};
  border-bottom: 1px solid ${(props) => props.theme.colors.lightGrey};
  box-shadow: 0 0 10px 1px ${(props) => props.theme.colors.lightGrey};

  & > .wrapper {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 20px;
    font-family: "Cairo", sans-serif;
    font-weight: 700;
    color: #8d6e63;

    & > img {
      width: auto;
    }
  }

  .header-actions {
    width: 30%;
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: space-between;

    .search-form {
      width: 75%;
      padding: 3px 15px;
      border: 1px solid ${(props) => props.theme.border.gray};
      border-radius: 50px;
      transition: border-color 0.2s ease;

      &:hover {
        border-color: ${(props) => props.theme.colors.grey};
      }

      .MuiInputAdornment-root {
        opacity: 0.5;
      }

      .MuiInputBase-input {
        padding: 4px 0 2px;
        font-size: 15px;
      }
    }
  }

  .search-form {
    width: 25%;
    padding: 0 10px;
    border: 1px solid ${(props) => props.theme.border.gray};
    border-radius: 50px;

    .MuiInputBase-input {
      padding: 4px 0 3px;
    }
  }

  .header-icon {
    padding: 6px 7px 3px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.lightGrey};
    transition: 0.1s ease;

    svg {
      fill: ${(props) => props.theme.colors.grey};
    }

    &:hover {
      scale: 1.1;
    }
  }
`;
