import { DateTime } from 'luxon'
import Category from 'App/Models/Category'
import { BaseModel, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import { BelongsTo } from '@ioc:Adonis/Lucid/Orm'

export default class Thread extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public userId: number

  @column()
  public categoryId: number

  @column()
  public title: string

  @column()
  public content: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  // relationships
  @belongsTo(() => Category)
  public category: BelongsTo<typeof Category>

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>
}
