import React from "react";
import { connect } from "react-redux";
import { playDouble } from "../redux/actions";
import { format } from "../helpers/format";

class PlayDouble extends React.Component {
  render() {
    const { fetchingPlayDouble, dice3, userName, password } = this.props;
    return (
      <div className="card">
        <div className="card-header">Hey yavrum heeey...</div>
        <div className="card-header">
          <button
            onClick={() => this.props.playDouble({ userName, password })}
            title="Oynama"
            className="btn btn-warning"
            disabled={fetchingPlayDouble || !userName || !password}
            style={{ fontSize: "2em", width: "50%" }}
          >
            <span role="img" aria-label="Dice">
              🎲 🎲
            </span>
          </button>
        </div>
        {dice3 != null && (
          <div className="card-body row">
            <div className="col-12">
              <h5 style={{ color: "gray" }}>
                Çift Zar <small> (11-66) </small>
              </h5>
              Hileyi buldun. Ama biz biliyoruz ki sen cici çocuksun. Hile hurda
              ile işin olmaz.
              <h3 className="score mt-4">{format(dice3)}</h3>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { play } = state;
  const { fetchingPlayDouble, dice3, userName, password } = play;

  return {
    userName,
    password,
    fetchingPlayDouble,
    dice3
  };
};

const mapDispatchToProps = dispatch => ({
  playDouble: postData => {
    dispatch(playDouble(postData));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayDouble);
