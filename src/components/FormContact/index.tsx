import {
    Box,
    Button,
    createTheme,
    CssBaseline,
    Grid,
    Paper,
    TextField,
    ThemeProvider,
    Typography,
    useMediaQuery,
} from "@mui/material";
import { useFormik } from "formik";
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
    const formik = useFormik({
        initialValues: {
            assunto: "",
            mensagem:""
        },
        onSubmit: (values) => {
            console.log(values);
        },
    });
    const matches = useMediaQuery("(min-width:600px)");

    return (
        <>
            <ThemeProvider theme={theme}>
                <Grid  container component="main" sx={styles.conteiner}>
                    <CssBaseline />
                    <Grid
                        item
                        xs={false}
                        sm={4}
                        md={7}
                        sx={{
                            backgroundImage:
                                "url(https://c0.wallpaperflare.com/preview/107/827/799/black-and-white-close-up-hanging-headphones.jpg)",
                            backgroundRepeat: "no-repeat",
                            backgroundColor: (t) =>
                                t.palette.mode === "light"
                                    ? t.palette.grey[50]
                                    : t.palette.grey[900],
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    />
                    <Grid
                        item
                        xs={12}
                        sm={8}
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
                             component="h1" variant="h5">
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
                                    sx={{ mt: 2, mb: 3,
                                     }}

                                >
                                    Enviar
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </>
    );
};
