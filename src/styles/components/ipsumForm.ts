import styled from 'styled-components'

const FormWrapper = styled.div`
  form {
    position: relative;
  }
`

const FormGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  align-items: center;
  grid-gap: 1rem;
  width: 100%;
`

const FormItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  label {
    font-size: 1rem;
    font-weight: bold;
    line-height: 2;
    margin: 0;
    padding-right: 1rem;
    ${props => props.theme.minMedia.md`
      font-size: 1.125rem;
    `}
  }
`

export { FormGroup, FormItem, FormWrapper }
