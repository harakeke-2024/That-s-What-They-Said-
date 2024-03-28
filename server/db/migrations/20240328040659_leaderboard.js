export async function up(knex) {
  return knex.schema.createTable('leaderboard', (table) => {
    table.integer('id').primary()
    table.string('name')
    table.integer('score')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('leaderboard')
}
