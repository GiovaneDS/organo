import './Campo.css'

const Campo = (props, type = 'text') => {

    const placeholderModificada = `${props.placeholder}...`
    
    return(
        <div className={`campo campo-${props.type}`}>
            <label>{props.label}</label>
            <input 
                type={props.type}
                onChange={evento => props.aoAlterado(evento.target.value)}
                value={props.valor} 
                required={props.obrigatorio}
                placeholder={placeholderModificada}/>
        </div>
    )
}

export default Campo