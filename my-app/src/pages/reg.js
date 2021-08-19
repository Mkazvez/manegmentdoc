import React, { useEffect, useState } from "react";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Axios from "axios";
import "../App.css";

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://www.sberbank.ru/">
          Комманда слабоумия и отвага
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
 

const useStyles = makeStyles((theme) => ({
    paper: {
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
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

export default function Registration() {
    const classes = useStyles();
//   const [usernameReg, setUsernameReg] = useState("");
//   const [passwordReg, setPasswordReg] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  Axios.defaults.withCredentials = true;

  const login = () => {
    Axios.post("api/users/login", {
      username: username,
      password: password,
    }).then((response) => {
        setName(response.data.name);
        setRole(response.data.role);
        window.localStorage.setItem('in_fio', response.data.name)
        window.localStorage.setItem('in_role', response.data.role)        
        console.log(1, name);
      }
    )
//    window.location.assign('/');
  };

//   useEffect(() => {
//     // Axios.get("http://localhost:3001/login").then((response) => {
//     //   if (response.data.loggedIn === true) {
//     //     setLoginStatus(response.data.user[0].username);
//     //   }
//     // });
//         window.localStorage.setItem('in_fio', name)
//         window.localStorage.setItem('in_role', role)
//         console.log(2, name);
//     }, []);


return (
    <div className={classes.paper}>
     <Avatar className={classes.avatar}>
         { name === '' && <LockOutlinedIcon />}
         { name !== '' && <LockOpenOutlinedIcon style={{ background: 'green' }}/>}
     </Avatar>
     <Typography component="h1" variant="h5">
         Вход
     </Typography>
      <div className="login">
        <input
//            type="text"
//            placeholder="Username..."
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <p/>
        <input
          type="password"
          placeholder="Password..."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button 
            onClick={login}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
        > 
        Login </button>
      </div>
        <Grid container>
             <Grid item xs>
                 <Link variant="body2">
                     { name !== '' &&       
                        <Typography variant="body2" color="textSecondary" align="center">
                            {'Пользователь - '+name+', роль - '+role }
                            <p>
                            <Link color="inherit" href="/reports">
                                Просмотрет отчеты
                            </Link>
                            </p>
                        </Typography>}
                 </Link>
             </Grid>
         </Grid>    
      <Box mt={8}>
        <Copyright />
      </Box>
    </div>
    // <Container component="main" maxWidth="xs">
    // <CssBaseline />
    // <div className={classes.paper}>
    // <Avatar className={classes.avatar}>
    //     <LockOutlinedIcon />
    // </Avatar>
    // <Typography component="h1" variant="h5">
    //     Вход
    // </Typography>
    // <form className={classes.form} noValidate>
    //     <TextField
    //     variant="outlined"
    //     margin="normal"
    //     required
    //     fullWidth
    //     id="email"
    //     label="Email Address"
    //     name="email"
    //     autoComplete="email"
    //     autoFocus
    //     onChange={(e) => {
    //         setUsername(e.target.value);
    //         }}
    //     />
    //     <TextField
    //     variant="outlined"
    //     margin="normal"
    //     required
    //     fullWidth
    //     name="password"
    //     label="Password"
    //     type="password"
    //     id="password"
    //     autoComplete="current-password"
    //     onChange={(e) => {
    //     setPassword(e.target.value);
    //     }}
    //     />
    //     {/* <FormControlLabel
    //     control={<Checkbox value="remember" color="primary" />}
    //     label="Remember me"
    //     /> */}
    //     <Button
    //     type="submit"
    //     fullWidth
    //     variant="contained"
    //     color="primary"
    //     className={classes.submit}
    //     onClick={login}
    //     >
    //     Войти
    //     </Button>
    //     <Grid container>
    //         <Grid item xs>
    //             <Link variant="body2">
    //                 { name}
    //             </Link>
    //         </Grid>
    //     </Grid>    
    //     {/* <Grid container>
    //     <Grid item xs>
    //         <Link href="#" variant="body2">
    //         Forgot password?
    //         </Link>
    //     </Grid>
    //     <Grid item>
    //         <Link href="#" variant="body2">
    //         {"Don't have an account? Sign Up"}
    //         </Link>
    //     </Grid>
    //     </Grid> */}
    // </form>
    // </div>
    // <Box mt={8}>
    // <Copyright />
    // </Box>
    // </Container>

    );
}
