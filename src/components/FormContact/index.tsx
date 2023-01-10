import { useForm } from "@formspree/react";
import {
    Alert,
    Box,
    Button,
    createTheme,
    Grid,
    Paper,
    Snackbar,
    TextField,
    ThemeProvider,
    Typography,
    useMediaQuery,
} from "@mui/material";
import { useFormik } from "formik";
import { SyntheticEvent, useEffect, useState } from "react";
import { styles } from "./styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#570DFF",
            contrastText: "#ffffff",
        },
    },
});

export const FormContact = () => {
    const [state, handleSubmit] = useForm("mvonolgg");

    const matches = useMediaQuery("(min-width:600px)");

    const [open, setOpen] = useState(false);

    const handleClose = (event?: SyntheticEvent | Event, reason?: string) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };

    const formik = useFormik({
        initialValues: {
            assunto: "",
            mensagem: "",
            email: "",
        },
        onSubmit: (values, { resetForm }) => {
            handleSubmit(values);
            resetForm();
        },
    });

    useEffect(() => {
        if (state.succeeded) {
            setOpen(true);
        }
    }, [state.succeeded]);

    return (
        <>
            <ThemeProvider theme={theme}>
                <Grid container component="main" sx={styles(matches).conteiner}>
                    <Grid
                        item
                        xs={false}
                        sm={4}
                        md={7}
                        sx={{
                            backgroundImage:
                                "url(https://c0.wallpaperflare.com/preview/107/827/799/black-and-white-close-up-hanging-headphones.jpg)",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    />
                    <Grid
                        item
                        xs={20}
                        sm={10}
                        md={5}
                        component={Paper}
                        elevation={6}
                        square
                    >
                        <Box
                            sx={{
                                my: 8,
                                mx: 4,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontWeight: "bold",
                                }}
                                component="h1"
                                variant="h5"
                            >
                                Contato
                            </Typography>
                            <Box
                                component="form"
                                noValidate
                                onSubmit={formik.handleSubmit}
                                sx={{ mt: 1 }}
                            >
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    required
                                    label="E-mail"
                                    name="email"
                                    id="email"
                                    type="email"
                                    autoFocus
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                />
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    required
                                    label="Assunto"
                                    name="assunto"
                                    id="assunto"
                                    type="text"
                                    autoFocus
                                    onChange={formik.handleChange}
                                    value={formik.values.assunto}
                                />
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    multiline
                                    required
                                    rows={4}
                                    name="mensagem"
                                    id="mensagem"
                                    type="text"
                                    autoFocus
                                    onChange={formik.handleChange}
                                    value={formik.values.mensagem}
                                    label="Mensagem"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    size="large"
                                    variant="contained"
                                    sx={{ mt: 2, mb: 3 }}
                                >
                                    Enviar
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </ThemeProvider>

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity="success"
                    sx={{ width: "100%" }}
                >
                    E-mail enviando!!
                </Alert>
            </Snackbar>
        </>
    );
};
