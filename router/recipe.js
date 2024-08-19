import {Router} from 'express';
import {RecipeController} from "../controllers/recipe.js";

export const recipeRouter = Router();

recipeRouter.get('/:searchTerm?', RecipeController.getAll);
recipeRouter.patch('/rating/:id', RecipeController.setRecipeRating);
