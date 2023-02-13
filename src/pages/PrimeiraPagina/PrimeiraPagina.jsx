import FormularioLogin from '../../components/FormularioLogin/FormularioLogin';

import Container from '@material-ui/core/Container';
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
