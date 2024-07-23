import { Table, Column, DataType, Model, BelongsToMany } from 'sequelize-typescript'
import { IProjectAttributes, IProjectCreationAttributes } from '../../interfaces/project.interface'
import ProjectProductMapping from './projectProductMapping.model'
import Product from './product.model'

@Table({ timestamps: true, tableName: 'project' })
export default class Project extends Model<IProjectAttributes, IProjectCreationAttributes> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  })
  projectId: number

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false
  })
  projectName: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      len: [3, 20]
    }
  })
  title: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      len: [0, 250]
    }
  })
  description: string

  @BelongsToMany(() => Product, {
    through: () => ProjectProductMapping,
    foreignKey: 'projectId',
    otherKey: 'productId'
  })
  Product: Product[]
  // Omitted createdAt and updatedAt for brevity (already defined by timestamps: true)
}
