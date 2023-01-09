import {
    Box,
    CardContent,
    Container,
    Stack,
    Typography,
    useMediaQuery,
} from "@mui/material";
import Card from "@mui/material/Card";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Call from "../../assets/call.png";
import pc from "../../assets/pc.svg";
import Vall from "../../assets/vall.png";
import { Cards } from "../Cards";
import { styles } from "./styles";

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
    },
};

export const Highlights = () => {
    const matches = useMediaQuery("(min-width:600px)");
    return (
        <>
            <Container maxWidth="md">
                <Typography sx={styles?.text} variant="h4" gutterBottom>
                    <strong style={styles?.textBold}>Desplugue </strong>
                    {"& jogue \nde verdade"}
                </Typography>
                <Box>
                    {matches ? (
                        <>
                            <Stack direction="row" spacing={2}>
                                <Cards />
                                <Image width={350} src={pc} alt="PC" />
                            </Stack>
                        </>
                    ) : (
                        <>
                            <Container maxWidth="md">
                                <Cards />
                                <Image
                                    style={{ marginTop: 20 }}
                                    width={300}
                                    src={pc}
                                    alt="PC"
                                />
                            </Container>
                        </>
                    )}
                </Box>
                <Box sx={styles.cont}>
                    <Typography sx={styles?.text} variant="h4" gutterBottom>
                        Eaí, vai jogar o que?
                    </Typography>
                    <Carousel ssr={true} 
                    customLeftArrow={<></>}
                    customRightArrow={<></>}
                    responsive={responsive}>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Image width={150} src={Call} alt="PC" />
                            </CardContent>
                        </Card>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Image width={150} src={Vall} alt="PC" />
                            </CardContent>
                        </Card>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Image width={150} src={Call} alt="PC" />
                            </CardContent>
                        </Card>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Image width={150} src={Call} alt="PC" />
                            </CardContent>
                        </Card>
                    </Carousel>
                </Box>
            </Container>
        </>
    );
};
