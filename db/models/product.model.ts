import { Table, Column, DataType, Model, BelongsToMany } from 'sequelize-typescript'
import { IProductAttributes, IProductCreationAttributes } from '../../interfaces'
import { ProjectProductMapping } from './projectProductMapping.model'
import { Project } from './project.model'

@Table({ timestamps: true, tableName: 'products' })
export class Product extends Model<IProductAttributes, IProductCreationAttributes> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  })
  productId!: number

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false
  })
  productName!: string

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    validate: {
      min: 0
    }
  })
  quantity!: number

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      len: [0, 250]
    }
  })
  description!: string

  @BelongsToMany(() => Project, {
    through: () => ProjectProductMapping,
    foreignKey: 'productId',
    otherKey: 'projectId'
  })
  projects!: Project[]
}
