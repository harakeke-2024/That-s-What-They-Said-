export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('questions').del()

  // Inserts seed entries
  await knex('questions').insert([
    {
      id: 1,
      question: 'If you could be a fish, what fish would you be?',
      type: 'text',
      daph: 'Whale shark',
      hannah: 'Goldfish',
      jared: 'Crawfish',
      rich: 'Stingray',
    },
    {
      id: 2,
      question: 'What is your favourite spam?',
      type: 'text',
      daph: 'Tocino',
      hannah:
        'Maple (never tried any spam but, I like maple syrup and bacon together)',
      jared: 'Unknown',
      rich: 'SPAM with cheese',
    },
    {
      id: 3,
      question: 'What would be your superpower?',
      type: 'text',
      daph: 'Making food and water out of air and being able to teleport that to any location',
      hannah: 'Flying',
      jared: 'One handed clapping',
      rich: 'Mentally create, control, and manipulate pure kinetic energy to my desire',
    },
    {
      id: 4,
      question: 'What meme represents your life?',
      type: 'image',
      daph: 'daph.png',
      hannah: 'hannah.jpg',
      jared: 'jared.png',
      rich: 'rich.jpg',
    },
    {
      id: 5,
      question: 'Worst sandich ingredient?',
      type: 'text',
      daph: 'Anthrax',
      hannah: 'Tuna mixed with custard',
      jared: 'Vegan meat approximates',
      rich: 'Sardines',
    },
    {
      id: 6,
      question: 'Who made this sound?',
      type: 'sound',
      daph: '',
      hannah: '',
      jared: '',
      rich: '',
    },
    {
      id: 7,
      question: 'Favourite candy?',
      type: 'text',
      daph: 'That lollipop with chewing gum in it',
      hannah: 'Mackintosh toffee candies',
      jared: 'Fruit Jubes',
      rich: 'Gummies',
    },
    {
      id: 8,
      question: 'Favourite app?',
      type: 'text',
      daph: 'Co-star is a fun time',
      hannah: 'Wordle',
      jared: 'The Chrome extension I made to troll Hannah',
      rich: 'YouTube',
    },
    {
      id: 9,
      question: 'Favourite sleeping position?',
      type: 'text',
      daph: 'Recovery position',
      hannah: 'On my stomach with my face smashed up against the pillow',
      jared: 'side',
      rich: 'Sleeping on my left side',
    },
    {
      id: 10,
      question: 'Last words?',
      type: 'text',
      daph: '"Woops!"',
      hannah: 'Lol watch this',
      jared: "You'll never catch me alive, you capatalist fucks",
      rich: 'Who are you?',
    },
  ])
}
