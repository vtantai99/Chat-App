import { Form } from 'antd'
import styledComponents from 'styled-components'

export const WrapperStyled = styledComponents.div`
  height: 100vh;
`

export const HeaderStyled = styledComponents.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  padding: 0 16px;
  border: 1px solid ${({ theme }) => theme.bd_secondary};

  .header {
    &__info {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    &__title {
      margin: 0;
      font-weight: bold;
    }
    &__des {
      font-size: 12px;
    }
  }
`
export const ButtonGroupStyled = styledComponents.div`
  display: flex;
  align-items: center;
`

export const ContentStyled = styledComponents.div`
  height: calc(100% - 56px);
  padding: 10px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

export const FormStyled = styledComponents(Form)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 2px 2px 0;
  border: 1px solid ${({ theme }) => theme.bd_secondary};
  border-radius: 2px;

  .ant-form-item {
    flex: 1;
    margin-bottom: 0;
  }
`

export const MessageListStyled = styledComponents.div`
  max-height: 100%;
  overflow-y: auto;
`
