import Footer from "./app/components/Footer"
import Header from "./app/components/Header"
import HighlightSection from "./app/components/HighlightSection";
import Section from "./app/components/Section";

function App() {

  return (
    <div className="wrapper">
      <Header />
        <main
         style={{
          marginTop:'8rem'
         }}>
          <HighlightSection/>
        <Section title ="Para você"/>
        <Section title ="Para toda a familia"/>
      </main>
      <Footer />
    
    </div>

  )
} 

export default App;
