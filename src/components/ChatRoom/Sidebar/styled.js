import styledComponents from 'styled-components'

export const SidebarWrapper = styledComponents.div`
  background: ${({ theme }) => theme.sidebar};
  color: ${({ theme }) => theme.white};
  height: 100vh;
`
