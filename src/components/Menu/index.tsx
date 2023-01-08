import MenuIcon from "@mui/icons-material/Menu";
import {
    Box,
    Button,
    Container,
    Stack,
    ThemeProvider,
    useMediaQuery,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import Image from "next/image";
import Logo from "../../assets/logo.svg";
import styles from "./styles.module.scss";

const theme = createTheme({
    palette: {
        primary: {
            main: "#FFFFFF",
            contrastText: "#570DFF",
        },
    },
});

export const Menu = () => {
    const matches = useMediaQuery("(min-width:600px)");
    return matches ? (
        <>
            <ThemeProvider theme={theme}>
                <Stack direction="row" className={styles.container}>
                    <Image width={40} src={Logo} alt="Logo" />
                    <Container maxWidth="xs">
                        <Stack direction="row" spacing={3}>
                            <Button color="primary" variant="text">
                                Home
                            </Button>

                            <Button color="primary" variant="text">
                                Produtos
                            </Button>

                            <Button color="primary" variant="text">
                                Contato
                            </Button>

                            <Button color="primary" variant="text">
                                Blog
                            </Button>
                        </Stack>
                    </Container>
                    <Stack direction="row" spacing={3}>
                        <Button color="primary" variant="text">
                            Entrar
                        </Button>
                        <Button variant="contained">cadastre-se</Button>
                    </Stack>
                </Stack>
            </ThemeProvider>
        </>
    ) : (
        <>
            <Box className={styles.containerMobile}>
                <MenuIcon width={50} />
            </Box>
        </>
    );
};
