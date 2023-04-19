import { MonitorsTrasfromed } from 'models/monitors';
import Item from './Item';

interface IProps {
  monitors: MonitorsTrasfromed | undefined
}

function List({ monitors }: IProps) {
  return (
    <>
      {(monitors || []).map((({
        id, name, status, timeUpdated, frequencyFormatted,
      }) => (
        <Item
          key={id}
          id={id}
          name={name}
          status={status}
          timeUpdated={timeUpdated}
          frequency={frequencyFormatted}
        />
      )))}
    </>
  );
}

export default List;
