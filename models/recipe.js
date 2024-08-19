export class RecipeModel {
    constructor({db}) {
        this.db = db;
    }

    async getAll({genre}) {
        return this.db.find({genre});
    }

    async getById(id) {
        return this.db.findOne({id});
    }

    async create({input}) {
        return this.db.create(input);
    }

    async delete({id}) {
        return this.db.delete({id});
    }

    async update({id, input}) {
        return this.db.update({id, input});
    }
}
