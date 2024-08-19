import {Router} from 'express';
import {RecipeController} from "../controllers/recipe.js";

export const recipeRouter = Router();

recipeRouter.get('/', RecipeController.getAll);
