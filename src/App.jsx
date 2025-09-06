import { useState } from "react"
import Header from "./components/Header"
import Resultado from "./components/Resultado";
import './css/estilo.css'

function App() {

  // HOOK- useState - Manipula o estado da variável
  const[altura,setAltura]=useState();
  const [peso,setPeso]=useState();
  const[resultado,setResultado]=useState();
  const [mostrarResultado,setMostrarResultado]=useState(false);

  //CRIANDO A FUNÇAO CALCULAR IMC
  const calcularImc=(e)=>{
    e.preventDefault(); //evita o recarregamento da página
    if(altura >0 && peso > 0){
      const imc=peso / (altura*altura);
      setResultado(imc.toFixed(2)); //arrendonda para 2 casas decimais
      setMostrarResultado(true);
    }else{
      alert("Por favor digite valores valídos");
      setMostrarResultado(false);
    }
  }

  
  