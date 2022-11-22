const db = require('./serverDataBase');
const porta = 3001

const bodyParser = require('body-parser')
const cors =require('cors')
const express = require('express');
const app = express();


function insert(a,b,c,d){
    let insert = `insert into dados values ( '${a}', '${b}', '${c}', '${d}')` 
    console.log(insert)
     return insert
}

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.post('/api/insert', async(req,res) => { 
    const localidade = req.body.localidade
    const agressor = req.body.agressor
    const vitima = req.body.vitima
    const relato = req.body.relato

    const sqlInsert = insert(localidade,agressor,vitima,relato)
    db.query(
        sqlInsert,
        (err, result) => { 
            console.log(result)
        }
    )
}
);

app.listen(porta, () => {
    console.log(`servidor iniciado na porta: ${porta}`);
});