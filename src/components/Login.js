import React from "react";
import { connect } from "react-redux";
import { login } from "../redux/actions";
import { format } from "../helpers/format";

class Login extends React.Component {
  state = {
    userName: null,
    password: null
  };

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <div className="input-group form-group mb-2">
            <label
              className="input-group-prepend"
              style={{ fontSize: "1.5em" }}
              title="user name"
            >
              <span className="input-group-text">
                <span role="img" aria-label="Profile" style={{ width: "32px" }}>
                  👤
                </span>
              </span>
            </label>
            <input
              type="text"
              className="form-control text-center"
              aria-describedby="basic-addon1"
              onChange={e => this.setState({ userName: e.target.value })}
              maxLength="40"
              placeholder="nikneymin kadar konuş"
            />
          </div>

          <div className="input-group form-group mb-2">
            <label
              className="input-group-prepend"
              style={{ fontSize: "1.5em" }}
              title="Password"
            >
              <span className="input-group-text">
                <span role="img" aria-label="Profile" style={{ width: "32px" }}>
                  🔑
                </span>
              </span>
            </label>
            <input
              type="password"
              className="form-control text-center"
              aria-describedby="basic-addon1"
              onChange={e => this.setState({ password: e.target.value })}
              maxLength="20"
              placeholder="parolasız olmaz"
            />
          </div>

          <button
            onClick={() =>
              this.props.login({
                userName: this.state.userName,
                password: this.state.password
              })
            }
            title="Login"
            className="btn btn-secondary"
            disabled={this.props.fetchingLogin}
          >
            Giriş Yap / Kaydol
          </button>
        </div>

        {this.props.score != null && (
          <div className="card-body">
            <h5 style={{ color: "gray" }}>Puanınız</h5>
            <h3>{format(this.props.score)}</h3>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { play } = state;
  const { fetchingLogin, username, password, score } = play;

  return {
    fetchingLogin,
    username,
    password,
    score
  };
};

const mapDispatchToProps = dispatch => ({
  login: postData => {
    dispatch(login(postData));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
