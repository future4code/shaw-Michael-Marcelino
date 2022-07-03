import app from "./app";
import createRecipe from "./endpoints/recipes/createRecipe";
import getUserById from "./endpoints/users/gerUserById";
import getProfile from "./endpoints/users/getProfile";
import login from "./endpoints/users/login";
import signup from "./endpoints/users/signup";

// connection.raw("SHOW TABLES").then(console.log)  testar se esta ok conexao com a database

app.post("/user/signup",signup)
app.post("/user/login",login)
app.get("/user/profile",getProfile)
app.get("/user/:id/profile",getUserById)

app.post("/recipe",createRecipe)
app.get("/recipe/:id")