import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AlterTableReplies extends BaseSchema {
  protected tableName = 'replies'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('user_id').unsigned().notNullable()
      table.integer('thread_id').unsigned().notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
