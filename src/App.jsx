import { Header } from './components/Header.jsx'
import { ProductCard } from './components/ProductoCard.jsx';
import { Formulario } from './components/formulario.jsx';
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Formulario />
    
      <ProductCard 
        title="Producto 1" 
        image="https://via.placeholder.com/150" 
        description="Descripción del producto 1" 
      />
      <ProductCard 
        title="Producto 2" 
        image="https://via.placeholder.com/150" 
        description="Descripción del producto 2" 
      />
    </div>
  );
}

export default App
