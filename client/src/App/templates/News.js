import { imgs, txts } from './txt-img'
const line = ['news-line news-line-a','news-line news-line-b','news-line news-line-c']
const n = imgs.length/3

function collun (a) { 
    let coll = []
    let c = a

    if (a >= n) a = a % n 
    a = a*3

    for(let i = 0; i < 3; i++ ){
        coll.push(
            <li style={{ backgroundImage: `url(${imgs[i+a]})`}}>
                <article> 
                    <p> {txts[i+a]} </p> 
                </article>    
            </li>
        )
    } 
    return ( <ul className={line[c]}>{coll}</ul>  )
}
    
function roll (n){
    const newsLine  = document.getElementsByClassName('news-line')
    
    for (let i = 0; i < newsLine.length; i++ ) newsLine[i].style.display = 'none'
    
    newsLine[n].style.display = 'inline-flex';
}

export default function News(){    
    return( 
        <section id="news">     
            <div className='newsLine'>
                {collun(0)}
                {collun(1)}
                {collun(2)}

                <ul className='index'>
                    <li onMouseOver={() => roll(0)} />
                    <li onMouseOver={() => roll(1)} />
                    <li onMouseOver={() => roll(2)} />
                </ul>
            </div>
        </section>  
    ) 
}