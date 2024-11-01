import { useEffect, useState } from "react";
import Footer from "./app/components/Footer" // Importa o componente de rodapé
import Header from "./app/components/Header" // Importa o componente de cabeçalho
import HighlightSection from "./app/components/HighlightSection"; // Importa a seção de destaque
import { CategoryService } from "./app/sevices/category-service";
import { ICategory } from "./app/@libs/axios/types/types";

function App(){

  const[categories, setCategories] = useState<ICategory[]>([])

  useEffect(()=>{
    CategoryService.getAll()
    .then(result => {
      console.log('=>', result)
      setCategories(result.data)
    })
    .catch(error =>{
      console.log(error)
    })
  }, [])

  return (

    <div className="wrapper">

      <Header />

        <main
         style={{
          marginTop:'8rem' 
         }}>

          <HighlightSection/>
          {
            categories.map(item =>(
              <section key={item.Id} title={item.name}/>
            ))
          }

      </main>
{/* Componente de rodapé */}
      <Footer />
    
    </div>

  )
} 

export default App;
