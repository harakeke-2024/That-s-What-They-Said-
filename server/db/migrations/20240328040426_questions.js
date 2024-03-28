export async function up(knex) {
  return knex.schema.createTable('questions', (table) => {
    table.integer('id').primary()
    table.string('question')
    table.string('type')
    table.string('daph')
    table.string('hannah')
    table.string('jared')
    table.string('rich')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('questions')
}
