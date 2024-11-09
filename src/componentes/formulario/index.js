import { useState } from 'react';
import Botao from '../botao';
import Campo from '../campo';
import ListaSuspensa from '../listaSuspensa';
import './Formulario.css';
import { RiCloseLargeFill } from "react-icons/ri";

const Formulario = (props) => {
    
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')

    const [showTeamForm, setShowTeamForm] = useState(false);

    const aoSalvar = (evento) =>{
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome, 
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')

    }   
    
    return (
        <section className='formulario'> 
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>                
                <Campo 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor) }
                />
                <Campo 
                    obrigatorio={true} 
                    label="Cargo"
                    placeholder="Digite seu cargo" 
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor) }
                />
                <Campo 
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor) }
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    showTeamForm={showTeamForm}
                    setShowTeamForm={setShowTeamForm}
                    label="Time" 
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor) }
                />
                <Botao texto="Criar card"/>
            </form>

            {showTeamForm && <form onSubmit={(evento) => {
                evento.preventDefault()
                props.cadastrarTime({nome: nomeTime, cor: corTime})
                setNomeTime('')
                setCorTime('')
            }}>
                <RiCloseLargeFill 
                size={25} 
                className='close-icon'
                onClick={() => setShowTeamForm(!showTeamForm)} 
                />
                <h2>Preencha os dados para criar um novo time.</h2>
                <Campo 
                    obrigatorio 
                    label="Nome" 
                    placeholder="Digite o nome do time" 
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor) }
                />
                <Campo 
                    obrigatorio 
                    type="color"
                    label="Cor"
                    placeholder="Digite a cor do time" 
                    valor={corTime}
                    aoAlterado={valor => setCorTime(valor) }
                />
                <Botao texto="Criar novo time"/>
            </form>}
        </section>
    )
}

export default Formulario