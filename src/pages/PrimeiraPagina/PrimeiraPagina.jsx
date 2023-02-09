import FormularioLogin from '../../components/FormularioLogin';
import Container from '@mui/material/Container';
// import background from '../../background.webp'

export default function PrimeiraPagina() {
    return (
        <div className="content">
            {/* <Container>
                Topbar
                <img src={background} />
            </Container> */}

            <Container
                className="login"
                component="article">

                <h1> Faça seu login: </h1>
                <FormularioLogin />

            </Container>
        </div>
    );
}