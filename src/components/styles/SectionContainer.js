import styled from 'styled-components'

const SectionContainer = styled.section`
  min-height: 100vh;
  width: 100%;
  min-width: 320px;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : null)};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : null)};
  /* min-height: 425px; */
  margin: auto;
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  font-size: 1em;
  scroll-behavior: smooth;
  position: 'relative';
  padding: 100px 0 20px;
  box-sizing: border-box;
  /* gap: 10px; */
`

export default SectionContainer
