import styledComponents from 'styled-components'

export const UserWrapper = styledComponents.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid ${({ theme }) => theme.bd_primary};

  .user__info {
    display: flex;
    align-items: center;
  }

  .user__name {
    color: ${({ theme }) => theme.white};
    margin-left: 1rem;
  }
`

export const UserInfo = styledComponents.div`
  display: flex;
  align-items: center;
`
