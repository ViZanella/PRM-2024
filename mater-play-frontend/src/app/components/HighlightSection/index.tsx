// Importando componentes do Material-UI
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { MovieService } from "../../sevices/movie-service";
import { IMovie } from "../../@libs/axios/types/types";

function HighlightSection(){

const params =useParams();
const [movie,setMovies]= useState<IMovie>({} as IMovie);

useEffect(()=>{

    if(params.id){
        MovieService.getMoviesById(params.id)
        .then(result =>{
            if (result) setMovies(result);
        })
        .catch(error=>){
            console.log('Pau: ',Error)
        }
    }
},[params]);

    return(
// Box externo para encapsular toda a seção de destaque
        <Box>
{/* Container centraliza e define a largura máxima de seu conteúdo */}
            <Container>
 {/* Stack organiza os elementos horizontalmente (row) */}
                <Stack
                direction = "row">
{/* Imagem do pôster da série/filme */}
                    <img src ='assets/${movie.post}'/>
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
                            {movie.title}
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
                            {movie.ageRating} {/* Classificação etária */}
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
                         {movie.description}</Typography>
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