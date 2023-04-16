import Item from './Item';

const list = [
  {
    id: 1,
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
        id, name, status, timeUpdated, frequency,
      }) => (
        <Item
          key={id}
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
