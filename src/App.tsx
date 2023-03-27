import { store } from 'store/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import moment from 'moment';
import 'moment/locale/ru';
import theme from 'mytheme/theme';
import Routes from './router/Routes';

moment().locale('ru');

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
