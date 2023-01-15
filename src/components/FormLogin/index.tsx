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
import { setCookie } from "cookies-next";
import { Formik } from "formik";
import moment from "moment";
import { useState } from "react";
import { useSession } from "react-use-session";
import { LoginDto } from "../../dtos/user/login.dto";
import { api } from "../../services/apí";
import { AxiosError } from "../../types/AxiosError";
import { ILogin } from "../../types/Login";

export const FormLogin = () => {
    const { session, saveJWT } = useSession("jwt", false);
    const [isCheck, setIsCheck] = useState(false);

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
            <Formik
                validate={createValidator(LoginDto)}
                initialValues={{ email: "", password: "" }}
                onSubmit={async (values, { resetForm, setErrors }) => {
                    try {
                        const data = (await api.post("/user/login", {
                            email: values.email,
                            password: values.password,
                        })) as ILogin;
                        if (isCheck) {
                            setCookie("jwt", data.data.token, {
                                expires:new Date(moment().add(24, "hours").format())
                            });
                        }else{
                            saveJWT(data.data.token);
                        }
                        resetForm();
                    } catch (error) {
                        const data = error as AxiosError;
                        if (
                            data.response.data.message ===
                            "e-mail não cadastrado"
                        ) {
                            console.log(data.response.data.message);
                            setErrors({
                                email: "Usuário não cadastrado.",
                            });
                        } else if (
                            data.response.data.message === "Senha incorreta"
                        ) {
                            setErrors({
                                password: data.response.data.message,
                            });
                        }
                    }
                }}
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
                                        onBlur={handleBlur("email")}
                                        value={values.email}
                                        onChange={handleChange("email")}
                                    />
                                    {errors.email && touched.email ? (
                                        <>
                                            <Typography
                                                color={"error"}
                                                variant="subtitle1"
                                                gutterBottom
                                            >
                                                {errors.email}
                                            </Typography>
                                        </>
                                    ) : (
                                        <></>
                                    )}
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Senha"
                                        type="password"
                                        onBlur={handleBlur("password")}
                                        value={values.password}
                                        onChange={handleChange("password")}
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
                                                {errors.password}
                                            </Typography>
                                        </>
                                    ) : null}

                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={isCheck}
                                                onChange={() => {
                                                    setIsCheck(
                                                        isCheck === true
                                                            ? false
                                                            : true
                                                    );
                                                }}
                                                color="primary"
                                            />
                                        }
                                        label="Lembre de mim"
                                    />
                                    <Button
                                        type="submit"
                                        onClick={() => handleSubmit()}
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
};
