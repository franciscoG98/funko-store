import { makeStyles/*, withTheme*/ } from '@material-ui/core/styles';




const useStyles = makeStyles((theme) => ({
    todo: {
        backgroundColor: 'white',
        opacity: '88%'
    },
    paper: {
        // color: 'black',
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
        // backgroundColor: 'white',
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default useStyles;