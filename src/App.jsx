import styled from "styled-components"
import VagaItem from './components/VagaItem'

const Page = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: gray;
`

function App() {

  return (
    <Page>
      <VagaItem titulo="titulo"/>
    </Page>
  )
}

export default App
