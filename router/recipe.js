import {Router} from 'express';
import {RecipeController} from "../controllers/recipe.js";

export const recipeRouter = Router();

recipeRouter.get('/:searchTerm?', RecipeController.getAll);
recipeRouter.get('/detail/:id', RecipeController.getRecipeById);
recipeRouter.patch('/rating/:id', RecipeController.setRecipeRating);
recipeRouter.get('/rating/:sortBy', RecipeController.getRatedRecipes);
