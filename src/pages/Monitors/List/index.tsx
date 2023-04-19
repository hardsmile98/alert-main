import { MonitorsResponse } from 'models/monitors';
import Item from './Item';

interface IProps {
  monitors: MonitorsResponse | undefined
}

function List({ monitors }: IProps) {
  return (
    <>
      {(monitors || []).map((({
        id, name, status, updatedAt, frequency,
      }) => (
        <Item
          key={id}
          id={id}
          name={name}
          status={status}
          timeUpdated={updatedAt}
          frequency={frequency}
        />
      )))}
    </>
  );
}

export default List;
