import {
    Box,
    Button,
    Checkbox,
    Container,
    createTheme,
    FormControlLabel,
    Grid,
    Link,
    TextField,
    ThemeProvider,
    Typography,
} from "@mui/material";
import createValidator from "class-validator-formik";
import { Formik } from "formik";
import Head from "next/head";
import * as React from "react";
import { LoginDto } from "../dtos/user/login.dto";

export default function signIn() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get("email"),
            password: data.get("password"),
        });
    };
    const theme = createTheme({
        palette: {
            primary: {
                main: "#570DFF",
                contrastText: "#ffffff",
            },
        },
    });

    return (
        <>
            <Head>
                <title>Login</title>
                <meta name="theme-color" content="#4c00fd" />
                <meta name="description" content="Login de usuário" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Formik
                validate={createValidator(LoginDto)}
                initialValues={{ email: "", password: "" }}
                onSubmit={(values) => console.log(values)}
            >
                {({
                    values,
                    touched,
                    errors,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                }) => (
                    <ThemeProvider theme={theme}>
                        <Container component="main" maxWidth="xs">
                            <Box
                                sx={{
                                    marginTop: 12,
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}
                            >
                                <Box
                                    component="form"
                                    onSubmit={handleSubmit}
                                    noValidate
                                    sx={{ mt: 1 }}
                                >
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email"
                                        name="email"
                                        autoComplete="email"
                                        autoFocus
                                    />
                                    {errors.password && touched.password ? (
                                        <>
                                            <Typography
                                                color={"error"}
                                                variant="subtitle1"
                                                gutterBottom
                                            >
                                                {errors.email}
                                            </Typography>
                                        </>
                                    ) : (<></>)}
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Senha"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                    />
                                    {errors.password && touched.password ? (
                                        <>
                                            <Typography
                                                color={"error"}
                                                variant="subtitle1"
                                                gutterBottom
                                            >
                                                {errors.email}
                                            </Typography>
                                        </>
                                    ) : null}

                                    <FormControlLabel
                                    
                                        control={
                                            <Checkbox
                                                value="remember"
                                                color="primary"
                                            />
                                        }
                                        label="Lembre de mim"
                                    />
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        Entrar
                                    </Button>
                                    <Grid container>
                                        <Grid item xs>
                                            <Link href="#" variant="body2">
                                                Esqueceu a senha?
                                            </Link>
                                        </Grid>
                                        <Grid item></Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </Container>
                    </ThemeProvider>
                )}
            </Formik>
        </>
    );
}
