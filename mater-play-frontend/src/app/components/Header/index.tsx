import { AppBar, Box, Button, Container, styled, Toolbar, Typography } from "@mui/material";

const MenuButton = styled(Button)({
    color:'white',
    fontWeight:'400rem'
})

function Header() {
    return (
        <AppBar>
            <Container>
                <Toolbar>
                    <Typography 
                        variant="h6"
                    >
                        Mater Play
                    </Typography>
                    <Box
                    sx={{
                        paddingLeft :'1rem'
                    }}
                    >
                        <Button>
                            <MenuButton variant="text">Todos</MenuButton>
                            <MenuButton variant="text">Series</MenuButton>
                            <MenuButton variant="text">Filmes</MenuButton>
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>

    )
}

export default Header; 
