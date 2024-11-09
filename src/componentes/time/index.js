import Colaborador from '../colaborador'
import './Time.css'
import hexToRgba from 'hex-to-rgba'

const Time = (props) => {
    return(
        props.colaboradores.length > 0 && 
        <section className='time' style={{backgroundColor: hexToRgba(props.cor, '0.6')}}>
            <input onChange={evento => props.mudarCor(evento.target.value, props.idTime)} value={props.cor} type='color' className='input-color'/>
            <h3 style={{borderColor: props.cor}}>{props.nome}</h3>
            <div className='colaboradores'>
            {props.colaboradores.map( (colaborador) => {           
                return (<Colaborador 
                    key={colaborador.id} 
                    nome={colaborador.nome} 
                    cargo={colaborador.cargo} 
                    imagem={colaborador.imagem} 
                    aoDeletar={props.aoDeletar} 
                    cor={props.cor}
                    idColaborador={colaborador.id}
                    favorito={colaborador.favorito}
                    favoritarColaborador={props.aoFavoritar}
                /> )
            })}
            </div>
        </section>
    )
}

export default Time