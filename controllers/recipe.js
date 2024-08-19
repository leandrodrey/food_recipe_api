import {RecipeModel} from "../models/recipe.js";

export class RecipeController {

    static async getAll(req, res) {
        const {genre} = req.query;
        const movies = await RecipeModel.getAll({genre});
        res.json(movies);
    }

    static async getById(req, res) {
        const {id} = req.params;
        const movie = await RecipeModel.getById(id);
        if (!movie) {
            return res.status(404).send('Movie not found');
        }
        res.json(movie);
    }

    static async create(req, res) {
        const result = validateMovie(req.body);
        if (result.error) {
            return res.status(400).json({error: JSON.parse(result.error.message)});
        }
        const newMovie = await RecipeModel.create({input: result.data});
        res.status(201).json(newMovie);
    }

    static async delete(req, res) {
        const {id} = req.params;
        const result = await RecipeModel.delete({id});
        if (!result) {
            return res.status(404).send('Movie not found');
        }
        res.send('Movie deleted');
    }

    static async update(req, res) {
        const {id} = req.params;
        const result = validatePartialMovie(req.body);
        if (result.error) {
            return res.status(400).json({error: JSON.parse(result.error.message)});
        }

        const updatedMovie = await MovieModel.update({id, input: result.data});
        if (!updatedMovie) {
            return res.status(404).send('Movie not found');
        }
        res.json(updatedMovie);
    }

}
