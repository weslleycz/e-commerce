import { Box, Container, useMediaQuery } from "@mui/material";
import Image from "next/image";
import Controller from "../../assets/controller.svg";
import { styles } from "./styles";

export const Hero = () => {
    const matches = useMediaQuery("(min-width:600px)");
    return (
        <>
            <Box sx={styles(matches)}>
                <Container maxWidth="sm">
                    <Image
                        width={matches ? 500 : 250}
                        src={Controller}
                        alt="Controle"
                    />
                </Container>
            </Box>
        </>
    );
};
