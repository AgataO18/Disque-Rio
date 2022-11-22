let templates = ['help','news','info','support']

function close(){
    for (let i of document.getElementsByTagName("section")) {
        i.style.display = 'none';
    }
}
export function open(n){
    close()
    document.getElementById(templates[n]).style.display = 'block'; 
}

function menu(){
    let menu = document.getElementById('nav').classList
    if (menu.value === "on") menu.remove('on')
    else menu.add('on')    
}

export default function Nav() {
    return (
        <nav id='nav'>
            <div className='mobile-menu' onClick={menu}>
                <div className='line line-a'/>
                <div className='line line-b'/>
                <div className='line line-c'/>
            </div>
            <p><a className='logo' href='/'>Disque Rio</a></p>
            <ul className='nav-list' >
                <li id="menu-0" onClick={() => open(0)}>  <p> Denuncie    </p></li>	
                <li id="menu-1" onClick={() => open(1)}>  <p> Notícias    </p></li>
                <li id="menu-2" onClick={() => open(2)}>  <p> Informações </p></li>
            </ul> 
        </nav>
    )
}