import axios from "axios";
import { PLAY, DATA } from "./actionsTypes";

var host = "https://new-year-game-server.herokuapp.com";
//var host = "http://localhost:3001";

const isNotAdmin = postData => {
  var userName = postData.userName;
  if (userName && postData.password && userName.toLowerCase() !== "admin")
    return true;
  else return false;
};

export const login = postData => {
  var isOk = isNotAdmin(postData);
  if (isOk) {
    return dispatch => {
      function request(payload) {
        return { type: PLAY.LOGIN_REQUEST, payload };
      }
      function success(payload) {
        return { type: PLAY.LOGIN_SUCCESS, payload };
      }
      dispatch(request(true));

      axios
        .post(host + "/api/login", postData)
        .then(response => {
          dispatch(success(response.data));
        })
        .catch(res => {
          dispatch(request(false));
        });
    };
  } else {
    return { type: PLAY.LOGOUT };
  }
};

export const playNormal = postData => {
  return dispatch => {
    function request(payload) {
      return { type: PLAY.PLAY_NORMAL_REQUEST, payload };
    }
    function success(payload) {
      return { type: PLAY.PLAY_NORMAL_SUCCESS, payload };
    }
    dispatch(request(true));

    axios
      .post(host + "/api/play", postData)
      .then(response => {
        dispatch(success(response.data));
      })
      .catch(res => {
        dispatch(request(false));
      });
  };
};

export const playDouble = postData => {
  return dispatch => {
    function request(payload) {
      return { type: PLAY.PLAY_DOUBLE_REQUEST, payload };
    }
    function success(payload) {
      return { type: PLAY.PLAY_DOUBLE_SUCCESS, payload };
    }
    dispatch(request(true));

    axios
      .post(host + "/api/notplay", postData)
      .then(response => {
        dispatch(success(response.data));
      })
      .catch(res => {
        dispatch(request(false));
      });
  };
};

export const playRisk = postData => {
  return dispatch => {
    function request(payload) {
      return { type: PLAY.PLAY_RISK_REQUEST, payload };
    }
    function success(payload) {
      return { type: PLAY.PLAY_RISK_SUCCESS, payload };
    }
    dispatch(request(true));

    axios
      .post(host + "/api/risk", postData)
      .then(response => {
        dispatch(success(response.data));
      })
      .catch(res => {
        dispatch(request(false));
      });
  };
};

export const playBomb = postData => {
  return dispatch => {
    function request(payload) {
      return { type: PLAY.PLAY_BOMB_REQUEST, payload };
    }
    function success(payload) {
      return { type: PLAY.PLAY_BOMB_SUCCESS, payload };
    }
    dispatch(request(true));

    axios
      .post(host + "/api/fifty", postData)
      .then(response => {
        dispatch(success(response.data));
      })
      .catch(res => {
        dispatch(request(false));
      });
  };
};

export const listAdmin = () => {
  return dispatch => {
    function success(payload) {
      return { type: DATA.GET_ADMIN_LIST, payload };
    }

    axios.get(host + "/api/admin").then(response => {
      dispatch(success(response.data.listadmin));
    });
  };
};

export const list = () => {
  return dispatch => {
    function success(payload) {
      return { type: DATA.GET_TOP_LIST, payload };
    }

    axios.get(host + "/api/list").then(response => {
      dispatch(success(response.data.list));
    });
  };
};

export const listN = () => {
  return dispatch => {
    function success(payload) {
      return { type: DATA.GET_BOTTOM_LIST, payload };
    }

    axios.get(host + "/api/listN").then(response => {
      dispatch(success(response.data.list));
    });
  };
};

export const count = () => {
  return dispatch => {
    function success(payload) {
      return { type: DATA.GET_COUNTS, payload };
    }

    axios.get(host + "/api/count").then(response => {
      dispatch(success(response.data));
    });
  };
};
