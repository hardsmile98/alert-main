import { Alert } from '@mui/material';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { MyError } from 'models';

interface IProps {
  error: FetchBaseQueryError | SerializedError | undefined
}

function ErrorAlert({ error }: IProps) {
  const { message } = (error as MyError)?.data || {};
  const errorMessage = Array.isArray(message) ? message.join(';') : message;

  if (!errorMessage) {
    return null;
  }

  return (
    <Alert severity="error">
      {errorMessage}
    </Alert>
  );
}

export default ErrorAlert;
