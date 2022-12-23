import type { Attributes, WhereAttributeHashValue } from 'sequelize';
import type { Model, ModelCtor } from 'sequelize-typescript';
import type { MakeNullishOptional } from 'sequelize/types/utils';

export class Repository<T extends Model<T>> {
    model: ModelCtor<T>;

    constructor(model: ModelCtor<T>) {
        this.model = model;
    }

    public async create(
        value: MakeNullishOptional<T["_creationAttributes"]>
    ): Promise<T> {
        return this.model.create(value);
    }

    public async update(
        id: WhereAttributeHashValue<Attributes<T>["id"]> | undefined,
        value: MakeNullishOptional<T["_creationAttributes"]>
    ): Promise<[affectedCount: number]> {
        return this.model.update(value, { where: { id } });
    }

    public async getAll(): Promise<T[]> {
        return this.model.findAll();
    }

    public async get(
        id: WhereAttributeHashValue<Attributes<T>["id"]> | undefined
    ): Promise<T | null> {
        return this.model.findOne({ where: { id } });
    }

    public async delete(
        id: WhereAttributeHashValue<Attributes<T>["id"]> | undefined
    ): Promise<number> {
        return this.model.destroy({ where: { id } });
    }
};
