import express, {json} from "express";
import {corsMiddleware} from "./middlewares/cors.js";
import {recipeRouter} from "./router/recipe.js";

const app = express()

app.disable('x-powered-by')
app.use(json())

app.use('/recipes', recipeRouter);

const PORT = process.env.PORT ?? 4000

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`)
})

app.use((req, res) => {
    res.status(404).send('Not Found')
})
