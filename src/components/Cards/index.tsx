import MarkunreadMailboxIcon from "@mui/icons-material/MarkunreadMailbox";
import MopedIcon from "@mui/icons-material/Moped";
import { Box, Stack, Typography } from "@mui/material";
import { styles } from "./styles";

export const Cards = () => {
    return (
        <>
            <Stack direction="row" spacing={2}>
                <Box sx={styles.card}>
                    <MopedIcon sx={{ fontSize: 50 }} fontSize="medium" />
                    <Typography
                        sx={{ fontWeight: "bold" }}
                        variant="subtitle1"
                        gutterBottom
                    >
                        Frete Grátis
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                        Frete grátis para todo o Brasil.
                    </Typography>
                </Box>

                <Box sx={styles.card}>
                    <MarkunreadMailboxIcon
                        sx={{ fontSize: 50 }}
                        fontSize="medium"
                    />
                    <Typography
                        sx={{ fontWeight: "bold" }}
                        variant="subtitle1"
                        gutterBottom
                    >
                        Pronta-entrega
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                        Toda a loja a pronta entrega.
                    </Typography>
                </Box>
            </Stack>
        </>
    );
};
