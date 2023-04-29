import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import notFound from 'assets/images/notFound.svg';
import { Wrapper } from 'components';
import { ChartData } from 'models';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  aspectRatio: 2,
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },
};

interface IProps {
  chartData: ChartData | undefined
}

function ResponseTime({ chartData }: IProps) {
  const { t } = useTranslation();

  if (!chartData?.length) {
    return (
      <Wrapper sx={{ textAlign: 'center' }}>
        <Box
          component="img"
          src={notFound}
          sx={{ width: 260, mb: 2 }}
          alt="No statistics"
        />

        <Typography variant="h4" gutterBottom>
          {t('monitor.noStatistics')}
        </Typography>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Line
        height={200}
        options={options}
        data={{
          labels: chartData.map((item) => item.label),
          datasets: [
            {
              label: t('monitor.responseTime'),
              data: chartData.map((item) => item.value),
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
          ],
        }}
      />
    </Wrapper>
  );
}

export default ResponseTime;
