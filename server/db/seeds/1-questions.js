export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('questions').del()

  // Inserts seed entries
  await knex('questions').insert([
    {
      id: 1,
      question: 'If you could be a fish, what fish would you be?',
      type: '',
      daph: '',
      hannah: '',
      jared: 'Crawfish',
      rich: '',
    },
    {
      id: 2,
      question: 'What is your favourite spam?',
      type: '',
      daph: '',
      hannah: '',
      jared: 'Unknown',
      rich: '',
    },
    {
      id: 3,
      question: 'What would be your superpower?',
      type: '',
      daph: '',
      hannah: '',
      jared: 'One handed clapping',
      rich: '',
    },
    {
      id: 4,
      question: 'What meme represents your life?',
      type: '',
      daph: '',
      hannah: '',
      jared: '',
      rich: '',
    },
    {
      id: 5,
      question: 'Worst sandich ingredient?',
      type: '',
      daph: '',
      hannah: '',
      jared: 'Vegan meat approximates',
      rich: '',
    },
    {
      id: 6,
      question: 'Who made this sound?',
      type: '',
      daph: '',
      hannah: '',
      jared: '',
      rich: '',
    },
    {
      id: 7,
      question: 'Favourite candy?',
      type: '',
      daph: '',
      hannah: '',
      jared: 'Fruit Jubes',
      rich: '',
    },
    {
      id: 8,
      question: 'Favourite app?',
      type: '',
      daph: '',
      hannah: '',
      jared: 'The Chrome extension I made to troll Hannah',
      rich: '',
    },
    {
      id: 9,
      question: 'Favourite sleeping position?',
      type: '',
      daph: '',
      hannah: '',
      jared: 'side',
      rich: '',
    },
    {
      id: 10,
      question: 'Last words?',
      type: '',
      daph: '',
      hannah: '',
      jared: "You'll never catch me alive, you capatalist fucks",
      rich: '',
    },
  ])
}