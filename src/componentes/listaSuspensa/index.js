import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    
    return (
        <div className='lista-suspensa'>
            
            <div className="label-wrapper">
                    <label>{props.label}</label>
                    <a
                        href="#"
                        className="new-team-link"
                        onClick={(e) => {
                            e.preventDefault();
                            props.setShowTeamForm(!props.showTeamForm);
                        }}
                    >Cadastrar novo time</a>
                 </div>
            <select 
                required={props.obrigatorio}
                onChange={evento => props.aoAlterado(evento.target.value)}
                value={props.valor}>
                <option value=""></option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa