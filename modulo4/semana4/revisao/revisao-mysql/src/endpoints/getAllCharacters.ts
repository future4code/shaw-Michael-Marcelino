import { Request, Response } from "express";
import { character } from "../types";
import connection from "../connection";
import { rejects } from "assert";

export default async function getAllCharacters(
  req: Request,
  res: Response
): Promise<void> { try {

  const {name, orderBy, orderType, page} = req.body;
  //  const result: character[] = await connection.raw("SELECT * FROM character")
  //res.send(result[0])

  const resultPerPage =5
  //pagina 1--> offset 0 ===5*0
  //pagina 2--> offset 0 ===5*1
  //pagina 3--> offset 0 ===5*2
  const offset = resultPerPage *(Number(page)-1)
  const character: character[] = await connection("character")
  .where("name","LIKE",`%${name}%`)
  .orderBy(orderBy as string || "name",orderType as string)
  .offset(offset)
  res.send(character)
    
} catch (error) {
    res.status(500).send("Unexpected server error")
    //console.log(error);
    
}
}
