import { Button, Container, Descricao, Local, Salario, Title } from "./style";

function index(props) {
    return ( 
        <Container>
            <Title>{props.titulo}</Title>
            <Salario>{props.salario}</Salario>
            <Local>{props.local}</Local>
            <Descricao>{props.descricao}</Descricao>
            <Button> Botão</Button>
        </Container>
     );
}

export default index;