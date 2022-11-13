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

export interface AuthProps {
  user: GOOGLEUSER | null
  snakeHighscore: number
  hamsterHighscore: number
  shooterHighscore: number
  flappyBirdHighscore: number
}

const INITIAL_STATE: AuthProps = {
  user: null,
  snakeHighscore: 0,
  hamsterHighscore: 0,
  shooterHighscore: 0,
  flappyBirdHighscore: 0,
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
