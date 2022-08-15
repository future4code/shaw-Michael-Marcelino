export type authenticationData ={
    id:string 
}

export type recipe ={
    id:string
    title:string
    description:string
    createdAt:string
    authorId:string

}

export type user ={
    id:string
    name:string
    email:string
    password:string
}
export const userTableName ="cookenu_user"
export const recipeTableName ="cookenu_recipes"
