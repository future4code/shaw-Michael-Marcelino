 
        CREATE TABLE to_do_list_users (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR (255) NOT NULL,
        nickname TEXT NOT NULL,
        email VARCHAR(255) NOT NULL
        );   
   
           CREATE TABLE to_do_list_tasks (
        id VARCHAR(255) PRIMARY KEY,
        title VARCHAR (1024) DEFAULT "No description provided",
        description TEXT NOT NULL,
        deadline DATE,
        status ENUM("TO DO","DOING","DONE") DEFAULT "TO DO",
        author_id VARCHAR(255),
        FOREIGN KEY (author_id) REFERENCES to_do_list_users(id)
    );
   
        CREATE TABLE to_do_list_assignees(
        task_id VARCHAR(64),
        assigne_id VARCHAR(64),
        PRIMARY KEY (task_id, assignee_id),
        FOREIGN KEY (task_id) REFERENCES to_do_list_tasks(id),
        FOREIGN KEY (assignee_id) REFERENCES to_do_list_users(id)    
        );
        
    

