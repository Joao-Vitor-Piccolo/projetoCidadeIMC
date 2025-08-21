import "../css/global.css"
import "../css/resultado.css"

const TabelaImc=(resultado)=>{
    if(resultado < 18){
        return (<>
            <td>Abaixo do Peso</td>
            <td>Abaixo de 18</td>
        </>)
    }
    else if (resultado > 18 && resultado < 25){
        return (
            <>
            <td>Peso Normal</td>
            <td>18 - 24.9</td>
            </>
        )
    }else if (resultado > 24 && resultado < 30){
        return (
            <>
            <td>Sobre Peso</td>
            <td>25 - 29.9</td>
            </>
        )}else if (resultado > 29 && resultado < 35){
        return (
            <>
            <td>Obesidade</td>
            <td>20 - 34.9</td>
            </>
        )}else{
            return (
            <>
            <td>Obesidade Morbida</td>
            <td>maior ou igual a 40</td>
            </>)
        }
};

function Resultado(resultado){
    return(
        <>
        <div>
            <div className="tabela">
                <h2>
                    seu IMC é de: <span className="imcSpan">{resultado}</span>
                </h2>
            </div>
            <table></table>
        </div>
        </>
    )
}
