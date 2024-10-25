// Importando componentes do Material-UI
import { Box, Button, Container, Stack, Typography } from "@mui/material";

function HighlightSection(){
    return(
// Box externo para encapsular toda a seção de destaque
        <Box>
{/* Container centraliza e define a largura máxima de seu conteúdo */}
            <Container>
 {/* Stack organiza os elementos horizontalmente (row) */}
                <Stack
                direction = "row">
{/* Imagem do pôster da série/filme */}
                    <img src = "assets/house-of-dragons-poster.jpg"/>
{/* Stack interna para organizar o texto e botões verticalmente */}
                    <Stack
                    sx={{
                        display:'flex', // Flexbox padrão para organizar os itens
                        direction:'colunn', // Corrigir o erro de digitação: 'column' em vez de 'colunn'
                        justifyContent:'center' // Centraliza verticalmente os textos
                    }}
                    >
 {/* Título da série/filme */}
                        <Typography
                        variant="h4">
                            A casa do dragão
                        </Typography>
 {/* Informações adicionais: classificação e gêneros */}
                        <Typography
                        variant="subtitle2"
                        >
 {/* Elemento <samp> estilizado para exibir a classificação etária */}
                           <samp
                           style={{
                            borderWidth:'1px',
                            borderStyle:'solid', // Borda sólida
                            padding:'0.2rem', // Espaçamento interno
                            marginRight:'0.3rem' // Espaçamento à direita
                           }}
                           >
                            16 {/* Classificação etária */}
                            </samp>
                            Aventura, fantasia, Ação
                        </Typography>
                        <Typography
                        variant="subtitle1"
                        sx={{
                            paddingTop:'2rem', // Espaçamento superior para separar os textos
                        }}
                        >
                            sinopse
                        </Typography>
                        <Typography
 //Corpo da sinopse 
                        variant="body2"
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio asperiores laborum, nihil non temporibus voluptatibus laudantium dolore at blanditiis, qui perspiciatis optio pariatur consequuntur quidem possimus in soluta distinctio. Voluptatum.
                        </Typography>
{/* Stack horizontal para botões */}
                        <Stack
                        direction="row"
                        >
{/* Botão "Assistir" */}
                            <Button 
                            variant="outlined"
                            >Assistir</Button>
{/* Botão "Detalhes" */}
                            <Button 
                            variant="contained">Detalhes</Button>
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
}
export default HighlightSection;