import { Box, Container, Stack, Typography } from "@mui/material";

function HighlightSection(){
    return(
        <Box>
        <Box>
            <Container>
                <Stack
                direction = "row">
                    <img src = "assets/house-of-dragons-poster.jpg"/>
                    <Stack
                    sx={{
                        display:'flex',
                        direction:'colunn',
                        justifyContent:'center'
                    }}
                    >
                        <Typography
                        variant="h4">
                            A casa do dragão
                        </Typography>
                        <Typography
                        variant="subtitle2"
                        >
                           <samp
                           style={{
                            borderWidth:'1px',
                            borderStyle:'solid',
                            padding:'0.2rem',
                            marginRight:'0.3rem'
                           }}
                           >
                            16
                            </samp>
                            Aventura, fantasia, Ação
                        </Typography>
                        <Typography
                        variant="subtitle1"
                        sx={{
                            paddingTop:'2rem',
                        }}
                        >
                            sinopse
                        </Typography>
                        <Typography
                        variant="body2"
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio asperiores laborum, nihil non temporibus voluptatibus laudantium dolore at blanditiis, qui perspiciatis optio pariatur consequuntur quidem possimus in soluta distinctio. Voluptatum.
                        </Typography>
                        <Stack
                        direction="row"
                        >
                            <button 
                            variant = "outlined"
                            >Assistir</button>
                            <button>Detalhes</button>
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
}
export default HighlightSection;