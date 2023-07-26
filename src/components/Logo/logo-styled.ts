import styled from 'styled-components/macro'

export const LogoContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  width: 300px;

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 30px;
    margin-left: 6px;
    color: ${({ theme }) => theme.palette.grey[800]};
  }
`
