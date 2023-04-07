import MonitorsItem from './MonitorsItem';

const list = [
  {
    name: 'site 1',
    status: 'up',
    timeUpdated: '11h 50m from now',
    frequency: '20m',
  },
];

function MonitorsList() {
  return (
    <>
      {list.map((({
        name, status, timeUpdated, frequency,
      }) => (
        <MonitorsItem
          name={name}
          status={status}
          timeUpdated={timeUpdated}
          frequency={frequency}
        />
      )))}
    </>
  );
}

export default MonitorsList;
