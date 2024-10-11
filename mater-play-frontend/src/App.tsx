import Footer from "./app/components/Footer" // Importa o componente de rodapé
import Header from "./app/components/Header" // Importa o componente de cabeçalho
import HighlightSection from "./app/components/HighlightSection"; // Importa a seção de destaque
import Section from "./app/components/Section"; // Importa o componente de seções personalizadas

function App() {

  return (
// Envolve todo o conteúdo da aplicação dentro de uma div com a classe "wrapper"
    <div className="wrapper">
{/* Componente de cabeçalho */}
      <Header />
{/* Tag <main> que representa o conteúdo principal da página */}
        <main
         style={{
          marginTop:'8rem' // Adiciona um espaçamento superior de 8rem para evitar sobreposição com o cabeçalho fixo
         }}>
 {/* Seção de destaque, geralmente com um destaque visual como uma imagem ou descrição */}
          <HighlightSection/>
{/* Componente de seções reutilizáveis com títulos diferentes */}
        <Section title ="Para você"/>
        <Section title ="Para toda a familia"/>
      </main>
{/* Componente de rodapé */}
      <Footer />
    
    </div>

  )
} 

export default App;
