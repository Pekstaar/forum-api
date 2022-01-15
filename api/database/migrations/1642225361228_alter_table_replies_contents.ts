import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AlterTableRepliesContents extends BaseSchema {
  protected tableName = 'replies'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.text('content').notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
