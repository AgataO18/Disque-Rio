import React from 'react';
import Axios from 'axios'
import {testPass} from './test';

let btnPass = [false, false, false, false]

export default function Support() {  
    const [localidade,   setLocal] = React.useState('');
    const [vitima,      setVictim] = React.useState('');
    const [agressor, setAggressor] = React.useState('');
    const [relato,      setReport] = React.useState('');
    
    function setSeach(name, i){
        if(i.id === 'local'    ){ setLocal(name);     return 0}
        if(i.id === 'aggressor'){ setAggressor(name); return 1}
        if(i.id === 'victim'   ){ setVictim(name);    return 2}
        if(i.id === 'report'   ){ setReport(name);    return 3}
    }

    function set(e){
        let name = e.target.value
        let i = document.getElementById(e.target.id)
        const btn = document.getElementById('btn-support')
        
        let n = setSeach(name, i)

        if (testPass( name, i.id )){ btnPass[n] = true; i.style.borderColor = '#11cadb'}
        else    {btnPass[n] = false; i.style.borderColor = 'pink'}

        if(btnPass[0] && btnPass[1] && btnPass[2] &&btnPass[3]) btn.style.background = '#11cadb' 
        else  {btn.style.background = '#80b4b9'; }
        
    }     
    
    const supportDone = () => {
        
        Axios.post('http://localhost:3001/api/insert',{
            localidade:localidade,
            agressor:agressor,
            vitima:vitima,
            relato:relato})
        }
        
        
        return (
            <section id="support"> 
            <div className='support-content'>
                <div className="support support-A">
                    <form method="get" name="form" >

                        <label className='line line-a'> <p>Localidade</p>            <input type="texto" id="local"    name='localidade' placeholder="" autocomplete="off" spellcheck="false"onChange={set}/></label>
                        <label className='line line-b'> <p>Descrição do agressor</p> <input type="texto" id="aggressor"name='agressor' placeholder="" autocomplete="off" spellcheck="false"onChange={set}/></label>
                        <label className='line line-c'> <p>Descrição da vitima</p>   <input type="texto" id="victim"   name='vitima' placeholder="" autocomplete="off" spellcheck="false"onChange={set}/></label>
                        <label className='line line-d'> <p>Relato</p>                <input type="texto" id="report"   name='relato' placeholder="" autocomplete="off" spellcheck="false"onChange={set}/></label>

                        <button onClick={supportDone} id="btn-support" className="btn btn-support">Enviar</button> 
                    </form>        
                </div>
                <div className="support support-B"/>
            </div>
        </section>
        
        
        )
    }
    
    
    
    // let btnPass = false
    // let inputPass = [false, false, false, false] 
    
    

    // btnPass = Boolean(inputPass[0] && inputPass[1] && inputPass[2] &&  inputPass[3]) 
    // if (btnPass)  btn.style.background ='pink'
    // else  btn.style.background = 'blue' 
    // alert(inputPass)