import { useCallback } from 'react';
import { VariantType, useSnackbar } from 'notistack';

export const useSetSnakbarCallback = () => {
  const { enqueueSnackbar } = useSnackbar();

  return useCallback(
    (message: string, variant: VariantType = 'warning') => {
      return enqueueSnackbar(message, { variant });
    },
    [enqueueSnackbar],
  );
};
