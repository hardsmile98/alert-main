import { store } from 'store/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import moment from 'moment';
import theme from 'theme/theme';
import Routes from './router/Routes';
import './configs/i18n';

moment().locale('en');

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
