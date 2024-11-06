
import { Paper } from "@mui/material"
import { IMovie } from "../../@libs/axios/types/types"


type MovieCardProps ={
    movie:IMovie
}
function MovieCard({movie}: MovieCardProps){
    return(
        <Paper
        component='a' 
        elevation={0} 
        href="/1" 
        sx={{
            minWidth:'10rem' 
        }}
        >
 { 
            <img src={`assets/{movie.poster}´} 
            style = {{   
                width:'100%'  
            }}
            />
        </Paper>
    )
}

export default MovieCard