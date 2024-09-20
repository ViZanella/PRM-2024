import {Container, IconButton, Stack, Typography } from "@mui/material"
import {Instagram,Facebook,YouTube}from '@mui/icons-material';

function Footer (){
    return(
        <footer>
            <Container
                sx ={{
                    padding: '3rem'
                }}
                >
                <Typography
                    variant="overline"
                    textAling="center"
                >
                    Mater play
                </Typography>
                <Stack
                direction='row'
                justifyContent= 'center'
                >
                    <IconButton>
                        <Instagram>
                        </Instagram>
                    </IconButton>
                    <IconButton>
                        <Facebook>
                        </Facebook>
                    </IconButton>
                    <IconButton>
                        <YouTube>
                        </YouTube>
                    </IconButton>
                </Stack>

            </Container>
        </footer>
    )
}
export default Footer