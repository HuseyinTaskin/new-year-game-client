import { PLAY } from "../actionsTypes";

const initialState = {
  fetchingLogin: false,
  userName: null,
  password: null,

  fetchingPlayNormal: false,
  fetchingPlayDouble: false,
  fetchingPlayBomb: false,
  fetchingPlayRisk: false,

  score: undefined,
  score2: undefined,
  score4: undefined,

  dice: undefined,
  dice2: undefined,
  dice3: undefined,
  dice4: undefined,

  userName1: undefined,
  userName2: undefined,
  userName3: undefined,
  userName4: undefined,

  win: undefined
};

export default function(state = initialState, action) {
  const payload = action.payload;
  switch (action.type) {
    case PLAY.LOGIN_REQUEST: {
      return {
        state: initialState,
        fetchingLogin: action.payload
      };
    }
    case PLAY.LOGIN_SUCCESS: {
      const user = payload.user;
      return {
        ...state,
        fetchingLogin: false,
        score: user.score,
        userName: user.userName,
        password: user.password
      };
    }
    case PLAY.LOGOUT: {
      return {
        state: {},
        fetchingLogin: false
      };
    }
    case PLAY.PLAY_NORMAL_REQUEST: {
      return {
        ...state,
        fetchingPlayNormal: payload
      };
    }
    case PLAY.PLAY_NORMAL_SUCCESS: {
      return {
        ...state,
        fetchingPlayNormal: false,
        score: payload.user.score,
        dice: payload.dice
      };
    }
    case PLAY.PLAY_DOUBLE_REQUEST: {
      return {
        ...state,
        fetchingPlayDouble: payload
      };
    }
    case PLAY.PLAY_DOUBLE_SUCCESS: {
      return {
        ...state,
        fetchingPlayDouble: false,
        score: payload.user.score,
        dice3: payload.dice
      };
    }
    case PLAY.PLAY_RISK_REQUEST: {
      return {
        ...state,
        fetchingPlayRisk: payload
      };
    }
    case PLAY.PLAY_RISK_SUCCESS: {
      return {
        ...state,
        fetchingPlayRisk: false,
        dice2: payload.dice,
        userName1: payload.user.userName,
        score: payload.user.score,
        userName2: payload.randomUser.userName,
        score2: payload.randomUser.score
      };
    }
    case PLAY.PLAY_BOMB_REQUEST: {
      return {
        ...state,
        fetchingPlayBomb: payload
      };
    }
    case PLAY.PLAY_BOMB_SUCCESS: {
      return {
        ...state,
        fetchingPlayBomb: false,
        dice4: payload.dice,
        userName3: payload.user.userName,
        score: payload.user.score,
        userName4: payload.randomUser.userName,
        score4: payload.randomUser.score,
        win: payload.win
      };
    }
    default:
      return state;
  }
}
