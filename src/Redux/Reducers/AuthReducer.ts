interface Action {
  type: string
  payload: any
}

interface Payload {
  prop: string
  value: number | string | object
}

interface GOOGLEUSER {
  familyName: string
  givenName: string
  email: string
  id: string
  name: string
  photo: string
}

interface Props {
  user: GOOGLEUSER | null
}

const INITIAL_STATE: Props = {
  user: null
}

export default (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case 'Credential_In':
      return { ...state, [action.payload.prop]: action.payload.value }
    case 'RESET':
      return { ...state, ...INITIAL_STATE }
    default:
      return state
  }
}
