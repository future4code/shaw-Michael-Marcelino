import { Request, Response } from "express";
import app from "./app";
import connection from "./connection";

app.get('/actor', async (req: Request, res: Response) => {
    try {
        const result = await connection.raw(`select id, name from actor`)
        // const result = await connection(`actor`)
        // .select(`name`)
        // .where({genre_film: `love`})
        
        
        console.log(result)
        res.send(result)
    } catch (error) {
        console.log(error)
        res.status(400).send("Erro")
    }
})

app.post("/actor", async (req, res) => {
    try {
        const {name, genreFilm, salary} = req.body
        type Actor = {
            name: string,
            genre_film: "love" | "action",
            salary: number
        }

        const actor : Actor= {
            name, genre_film: genreFilm,  salary
        }

        if(actor.genre_film !== "love" && actor.genre_film !== "action"){
            throw new Error()
        }

        await connection(`actor`).insert(actor)

        // await connection.raw(`
        //     INSERT INTO actor (name, genre_film, salary)
        //     VALUE (
        //     "${actor.name}", 
        //     "${actor.genreFilm}" ,
        //      ${actor.salary});
        // `)
        res.status(201).send("Created")
    } catch (error: any) {
        console.log(error.sqlMessage || error.message)
        console.log(error.sqlMessage )
        // if(error.sqlMessage.includes("Data truncated for column 'genre_film' at row 1")){
        //     res.status(400).send('Genero invalido, mande certo da proxima')
        // }
        res.status(400).send("Erro")
    }
})

app.put("/actor/:id", async (req: Request, res: Response) => {
    try {
        await connection(`actor`)
        .update({
            name: req.body.name,
            salary: req.body.salary
        })
        .where({id: req.params.id})
        res.send(`Ator ${req.params.id} atualizado `)
    } catch (error) {
        console.log(error)
        res.status(400).send("Erro")
    }
})

app.delete('/actor/:id', async (req: Request, res: Response) => {
    try {
        const linhaDeletadas = await connection(`actor`)
        .delete()
        .where({
            id: req.params.id
        })

        if(linhaDeletadas === 0){
            throw new Error()
        }

        res.send('Actor deletado')
    } catch (error) {
        console.log(error)
        res.status(400).send("Erro")
    }
})