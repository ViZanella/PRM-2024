import { Box, Container, Stack, Typography } from "@mui/material"
import MovieCard from "../MovieCard"
import { useEffect, useState } from "react";
import { IMovie } from "../../@libs/axios/types/types";
import { MoviesService } from "../../sevices/movie-service";

type SectionProps = {
    title: string;
}
function Section ({
    title
}:SectionProps){

    const[movies, setMovies]=useState<IMovie[]>([]);

    useEffect(()=>{
    //Executa o que está dntro quando carrega o componente

    MoviesService.getMovies()
    .then(result =>{
        setMovies(result)
    })
    },[]);

    return(
        <Box>
            <Container>
                <Typography
                variant="h6"
                sx={{
                    fontWeight:400,
                    padding:'2 rem'
                }}
                >
                    {title}
                </Typography>
                <Stack
                direction="row"
                gap={0.5}
                sx={{overflowY:'hidden',
                    whiteSpace:'nowrap',
                    paddingY:'1 rem'
                }}
                >
                {movies.map(item =>(
                   <MovieCard key={item.id} poster={'assets/' + item.poster}/>
                ))}
                </Stack>
            </Container>
        </Box>
    )
}

export default Section