const listPeriods = [
  { value: '2019-01', label: 'Jan/2019' },
  { value: '2019-02', label: 'Fev/2019' },
  { value: '2019-03', label: 'Mar/2019' },
  { value: '2019-04', label: 'Abr/2019' },
  { value: '2019-05', label: 'Mai/2019' },
  { value: '2019-06', label: 'Jun/2019' },
  { value: '2019-07', label: 'Jul/2019' },
  { value: '2019-08', label: 'Ago/2019' },
  { value: '2019-09', label: 'Set/2019' },
  { value: '2019-10', label: 'Out/2019' },
  { value: '2019-11', label: 'Nov/2019' },
  { value: '2019-12', label: 'Dez/2019' },
  { value: '2020-01', label: 'Jan/2020' },
  { value: '2020-02', label: 'Fev/2020' },
  { value: '2020-03', label: 'Mar/2020' },
  { value: '2020-04', label: 'Abr/2020' },
  { value: '2020-05', label: 'Mai/2020' },
  { value: '2020-06', label: 'Jun/2020' },
  { value: '2020-07', label: 'Jul/2020' },
  { value: '2020-08', label: 'Ago/2020' },
  { value: '2020-09', label: 'Set/2020' },
  { value: '2020-10', label: 'Out/2020' },
  { value: '2020-11', label: 'Nov/2020' },
  { value: '2020-12', label: 'Dez/2020' },
  { value: '2021-01', label: 'Jan/2021' },
  { value: '2021-02', label: 'Fev/2021' },
  { value: '2021-03', label: 'Mar/2021' },
  { value: '2021-04', label: 'Abr/2021' },
  { value: '2021-05', label: 'Mai/2021' },
  { value: '2021-06', label: 'Jun/2021' },
  { value: '2021-07', label: 'Jul/2021' },
  { value: '2021-08', label: 'Ago/2021' },
  { value: '2021-09', label: 'Set/2021' },
  { value: '2021-10', label: 'Out/2021' },
  { value: '2021-11', label: 'Nov/2021' },
  { value: '2021-12', label: 'Dez/2021' },
];

function getNext(value) {
  let index = listPeriods.findIndex(element => element.value === value);
  if (index < 0) return value;

  if (index < listPeriods.length) index++;

  return listPeriods[index].value;
}

function getPrior(value) {
  let index = listPeriods.findIndex(element => element.value === value);
  if (index < 0) return value;

  if (index < listPeriods.length) index--;

  return listPeriods[index].value;
}

export { listPeriods, getNext, getPrior };
