import {
  ChangeEventHandler,
  Dispatch,
  SetStateAction,
  useCallback,
} from 'react';

export const useInputValueChangeCallback = (
  setState: Dispatch<SetStateAction<string>>,
): ChangeEventHandler<HTMLInputElement> => {
  return useCallback((e) => setState(e.target.value), [setState]);
};
