import { open } from "./Nav";

export default function Help() {  
    return (
        <section id="help" className="btn">
                <button className="button" onClick={() => open(3)}> Denuncie Agora </button>
                {/* <p>clique aqui para consultar denuncia ja feita</p> */}
        </section>
    )
} 