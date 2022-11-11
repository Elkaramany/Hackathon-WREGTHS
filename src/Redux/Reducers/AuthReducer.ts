interface Action {
  type: string
  payload: any
}

interface Payload {
  prop: string
  value: number | string | object
}

interface Props {
  email: string
  password: string
}

const INITIAL_STATE: Props = {
  email: '',
  password: '',
}

export default (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case 'Credential_In':
      return { ...state, [action.payload.prop]: action.payload.value }
    default:
      return state
  }
}
