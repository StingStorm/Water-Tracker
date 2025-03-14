export const fields = {
  weight: {
    label: 'Your weight in kilograms:',
    name: 'weight',
    type: 'text',
    placeholder: 'weight in kilograms',
  },
  time: {
    label:
      'The time of active participation in sports or other activities with a high physical. load in hours:',
    name: 'time',
    type: 'text',
    placeholder: 'time of active',
  },
  water: {
    label: 'Write down how much water you will drink:',
    name: 'water',
    type: 'text',
    placeholder: 'water you will drink',
    bold: true,
  },
  gender: {
    title: 'Calculate your rate:',
    name: 'gender',
    items: [
      {
        value: 'female',
        label: 'For woman',
      },
      {
        value: 'male',
        label: 'For man',
      },
    ],
  },
};
