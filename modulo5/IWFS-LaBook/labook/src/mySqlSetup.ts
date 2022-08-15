import { connection } from "./connection";

async function createTables() {
    
try{
await connection.raw(`
CREATE TABLE labook_user (
	id VARCHAR(255) PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL unique,
    password ARCHAR(255) NOT NULL
)
`)

await connection.raw(`
CREATE TABLE labook_posts(
	id VARCHAR(255) PRIMARY KEY,
	photo VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    type ENUM("normal","event") DEAFAULT "normal",
    created_at TIMESTAMP DEAFAUT CURRENT_TIMESTAMP,
    author_id VARCHAR(255),
    FOREIGN KEY (author_id) REFERENCES labook_users (id)
   )
`)

console.log("MySql setup completed!")
}catch(error:any) {
    console.log(error); 
}
}

createTables()