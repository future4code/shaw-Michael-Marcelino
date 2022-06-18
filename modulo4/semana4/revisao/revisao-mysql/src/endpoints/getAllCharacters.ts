import { Request, Response } from "express";
import { character } from "../types";
import connection from "../connection";
import { rejects } from "assert";

export default async function getAllCharacters(
  req: Request,
  res: Response
): Promise<void> { try {

  const name = req.body;
  //  const result: character[] = await connection.raw("SELECT * FROM character")
  //res.send(result[0])

  const character: character[] = await connection("character");
  res.send(character)
    
} catch (error) {
    res.status(500).send("Unexpected server error")
    
}
}
