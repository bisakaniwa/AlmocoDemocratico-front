import FormularioLogin from '../../components/FormularioLogin';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';



const styles = {
    centered: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
};

const PrimeiraPagina = ({ classes }) => {
    return (
        <div className={classes.centered}>
            <Container
                className="login"
                component="article">
                <FormularioLogin />
            </Container>
        </div>
    );
};

export default withStyles(styles)(PrimeiraPagina);
