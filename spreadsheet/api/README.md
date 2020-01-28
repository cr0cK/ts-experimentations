# API

## Routes

- POST /cell

- Input

```
{
  coord: {
    column: 'A',
    row: 1
  },
  value: 42,
  type: 'number'
}
```

- Output

```
[
  // modified cell
  {
    coord: {
      column: 'A',
      row: 1
    },
    rawValue: 42,
    value: 42,
    type: 'number'
  },
  // reactive cells (that depends of $A1)
  {
    coord: {
      column: 'A',
      row: 2
    },
    rawValue: '=$A1',
    value: 42,
    type: 'number'
  },
  {
    coord: {
      column: 'A',
      row: 3
    },
    rawValue: '=$A3+10',
    value: 52,
    type: 'number'
  }
]
```

