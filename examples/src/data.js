export default [
  {
    label: 'Foo',
    value: 'foo',
  },
  {
    label: 'Bar',
    value: 'bar',
  },
  {
    label: 'My Option Group',
    children: [
      {
        label: 'Long but very long option label',
        value: 'long-option-label'
      },
      {
        label: 'Nested Option Group with long label',
        children: [
          {
            label: 'Cat',
            value: 'cat',
          },
          {
            label: 'Tiger',
            value: 'tiger',
          }
        ],
      },
      {
        label: 'Short',
        value: 'short-option-label'
      },
    ],
  },
]