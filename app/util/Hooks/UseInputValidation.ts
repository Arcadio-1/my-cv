import { useReducer } from "react";

interface InitialState {
  inputValue?: string | number;
  isTuched: boolean;
}

const initialstate: InitialState = {
  inputValue: "",
  isTuched: false,
};
enum StateTypes {
  Input,
  Tuched,
  Reset,
}
interface Action {
  type: StateTypes;
  inputValue?: string | number;
}

const reducer = (state: InitialState, action: Action): InitialState => {
  switch (action.type) {
    case StateTypes.Input:
      return { inputValue: action.inputValue, isTuched: state.isTuched };

    case StateTypes.Tuched:
      return { inputValue: state.inputValue, isTuched: true };

    case StateTypes.Reset:
      return { inputValue: "", isTuched: false };
  }
};

const useInputValidation = (
  validation: (value?: string | number | null) => boolean
) => {
  const [inputState, dispatchInputState] = useReducer(reducer, initialstate);

  const isValid = validation(inputState.inputValue);
  const errorStatus = !isValid && inputState.isTuched;

  const inputChangeHandler = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    dispatchInputState({
      type: StateTypes.Input,
      inputValue: event.target.value,
    });
  };

  const inputBlurHandler = () => {
    dispatchInputState({ type: StateTypes.Tuched });
  };

  const reset = () => {
    dispatchInputState({ type: StateTypes.Reset });
  };
  return {
    value: inputState.inputValue,
    isValid,
    errorStatus,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInputValidation;
