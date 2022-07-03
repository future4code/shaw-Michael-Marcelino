import connection from "../connection";
import { recipeTableName, userTableName } from "../types";



connection.raw(`
    CREATE TABLE IF NOT EXISTS ${userTableName}(
        id VARCHAR (255) NOT NULL PRIMARY KEY,
        name VARCHAR (255) NOT NULL,
        email VARCHAR (255) NOT NULL UNIQUE,
        password VARCHAR (255) NOT NULL
    );
    
    CREATE TABLE IF NOT EXISTS${recipeTableName}(
        id VARCHAR (255) NOT NULL PRIMARY KEY,
        title VARCHAR (255) NOT NULL,
        description VARCHAR (1000) NOT NULL UNIQUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        author_id VARCHAR (255),
        FOREIGN KEY (author_id) REFERENCES ${userTableName} (id)
    );

`).then(()=>console.log("Mysql Tables were Sucessfuly created"
)).catch(error =>console.log(error.message)
).finally(()=>{
    connection.destroy()
})