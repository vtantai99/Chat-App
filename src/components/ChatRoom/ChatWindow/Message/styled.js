import styledComponents from 'styled-components'

export const WrapperStyled = styledComponents.div`
  margin-bottom: 10px;

  .message {
    &__author {
      margin-left: 5px;
      font-weight: bold;
    }
    &__date {
      margin-left: 10px;
      font-size: 11px;
      color: ${({ theme }) => theme.grey};
    }
    &__content {
      margin-left: 30px;
    }
  }
`
