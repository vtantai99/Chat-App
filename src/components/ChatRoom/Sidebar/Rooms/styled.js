import { Collapse, Typography } from 'antd'
import styledComponents from 'styled-components'

const { Panel } = Collapse
const { Link } = Typography

export const PanelStyled = styledComponents(Panel)`
  &&& {
    .ant-collapse-header, p {
      color: ${({ theme }) => theme.white};

    }
    .ant-collapse-content-box {
      padding: 0 40px;
    }
    .add__room {
      color: ${({ theme }) => theme.white};
      padding: 0;
    }
  }
`

export const LinkStyled = styledComponents(Link)`
  color: ${({ theme }) => theme.white};
  display: block;
  margin-bottom: 10px;
`
