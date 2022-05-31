import express from 'express'
import cors from 'cors'


const app = express();

app.use(express.json());
app.use(cors());

type User = {
    id:number,
    name:string,
    phone: string,
    email:string,
    website:string
}
type Post = {
    id:number,
    title:string,
    body:string,
    userId:number
}
const users:User[] = [
    {
        id:1,
        name:'michaael',
        phone: '+351 999-999',
        email:'michaael@email.com',
        website:'michael@sapo.pt'
    },
    {
        id:2,
        name:'nastia',
        phone: '+351 919-999',
        email:'nastia@email.com',
        website:'nastia@sapo.pt'
    },
    {
        id:1,
        name:'nastia',
        phone: '+351 929-999',
        email:'michaael@email.com',
        website:'michael@sapo.pt'
    },
    {
        id:1,
        name:'eugenio',
        phone: '+351 939-999',
        email:'eugenio@email.com',
        website:'eugenio@sapo.pt'
    },
    {
        id:1,
        name:'laryssa',
        phone: '+351 949-999',
        email:'laryssa@email.com',
        website:'laryssa@sapo.pt'
    }
]
//Você acha melhor criá-los dentro ou fora do array de usuários? fora pois sera mais facil acessar o mesmo atraves dum endpoint especifico

const post:Post[]=[
    {
        "userId": 2,
        "id": 13,
        "title": "dolorum ut in voluptas mollitia et saepe quo animi",
        "body": "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam"
      },
      {
        "userId": 2,
        "id": 14,
        "title": "voluptatem eligendi optio",
        "body": "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum"
      },
      {
        "userId": 2,
        "id": 15,
        "title": "eveniet quod temporibus",
        "body": "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae"
      },
      {
        "userId": 2,
        "id": 16,
        "title": "sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio",
        "body": "suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta"
      },
      {
        "userId": 2,
        "id": 17,
        "title": "fugit voluptas sed molestias voluptatem provident",
        "body": "eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione qui eos\nqui nihil ratione nemo velit ut aut id quo"
      },
      {
        "userId": 2,
        "id": 18,
        "title": "voluptate et itaque vero tempora molestiae",
        "body": "eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam"
      },
      {
        "userId": 2,
        "id": 19,
        "title": "adipisci placeat illum aut reiciendis qui",
        "body": "illum quis cupiditate provident sit magnam\nea sed aut omnis\nveniam maiores ullam consequatur atque\nadipisci quo iste expedita sit quos voluptas"
      },
      {
        "userId": 2,
        "id": 20,
        "title": "doloribus ad provident suscipit at",
        "body": "qui consequuntur ducimus possimus quisquam amet similique\nsuscipit porro ipsam amet\neos veritatis officiis exercitationem vel fugit aut necessitatibus totam\nomnis rerum consequatur expedita quidem cumque explicabo"
      }
]

app.get('/user', (req, res) => {
 
    res.send(users);
});
app.get('/post', (req, res) => {
 
    res.send(post);
});



app.listen(3003, function() {
    console.log("Servidor rodando na porta 3003!");
});