import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import './Colaborador.css'

const Colaborador = (props) => {
    function favoritar() {
        props.favoritarColaborador(props.idColaborador);
    }
    const propsfavorito = {
        size: 25,
        onClick: favoritar
    }
    return (
        <div className='colaborador' >
            <AiFillCloseCircle 
                size={25} 
                className='deletar' 
                onClick={() => props.aoDeletar(props.idColaborador)} 
            />
            <div className='cabecalho' style={{backgroundColor: props.cor}}>
                <img src={props.imagem} alt={props.nome} />
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
                <div className='favoritar'>
                    {props.favorito 
                    ? <AiFillHeart {...propsfavorito} color='#ff0000'/> 
                    : <AiOutlineHeart {...propsfavorito}/>
                }
                </div>
            </div>

        </div>
    )
}

export default Colaborador