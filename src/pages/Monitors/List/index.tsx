import Item from './Item';

const list = [
  {
    name: 'site 1',
    status: 'up',
    timeUpdated: '11h 50m from now',
    frequency: '20m',
  },
];

function List() {
  return (
    <>
      {list.map((({
        name, status, timeUpdated, frequency,
      }) => (
        <Item
          name={name}
          status={status}
          timeUpdated={timeUpdated}
          frequency={frequency}
        />
      )))}
    </>
  );
}

export default List;
