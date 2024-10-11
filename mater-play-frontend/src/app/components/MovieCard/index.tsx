import { Paper } from "@mui/material"

// Define as propriedades esperadas pelo componente MovieCard usando o sistema de tipos do TypeScript
type MovieCardProps ={
    poster?: string; // 'poster' é uma propriedade opcional que representa a URL de uma imagem de pôster
}
// Função MovieCard que recebe as propriedades definidas em MovieCardProps
function MovieCard({poster}: MovieCardProps){
    return(
// O componente Paper serve como o "cartão" que contém a imagem do filme
// É usado como um link ('component="a"') com a propriedade href para navegar para a página de detalhes do filme ("/1")
        <Paper
        component='a' // Define o Paper como um link (<a> tag)
        elevation={0} // Remove a sombra padrão do Paper
        href="/1" // Define o link para onde o cartão vai redirecionar (URL "/1")
        sx={{
            minWidth:'10rem' // Define a largura mínima do cartão como 10rem
        }}
        >
 {/* Exibe a imagem do pôster do filme */}
            <img src={poster} // A imagem do pôster é passada pela propriedade 'poster'
            style = {{   // Adiciona um texto alternativo para acessibilidade
                width:'100%'  // A imagem ocupará 100% da largura do Paper
            }}
            />
        </Paper>
    )
}

export default MovieCard