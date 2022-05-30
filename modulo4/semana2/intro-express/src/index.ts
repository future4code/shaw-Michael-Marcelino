import express from 'express'
import cors from 'cors'
import { users } from './data';

const app = express();

app.use(express.json());
app.use(cors());
// exercicio
app.get('/todos', (req, res) => {
    // vai retornar todas as playlists

    const playlists = users.map((user) => {
        return user.playlists;
    })

    const resultado = playlists.flat(1);

    // flat faz isso aqui > [1, [2, 3], 4] = [1, 2, 3, 4]
    type user={
        id: number,
        name: string,
        phone: number,
        email: string,
        website: string
    }

    res.send(resultado);
});




app.listen(3003, function() {
    console.log("Tô rodando!");
});