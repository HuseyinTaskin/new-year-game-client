import React from "react";
import { connect } from "react-redux";
import { playNormal } from "../redux/actions";
import { format } from "../helpers/format";

class PlayNormal extends React.Component {
  render() {
    const { fetchingPlayNormal, dice, userName, password } = this.props;
    return (
      <div className="card">
        <div className="card-header">Puan topla benim için. Leylim ley...</div>

        <div className="card-header">
          <button
            onClick={() => this.props.playNormal({ userName, password })}
            title="Oyna"
            className="btn btn-info"
            disabled={fetchingPlayNormal || !userName || !password}
            style={{ fontSize: "2em", width: "50%" }}
          >
            <span role="img" aria-label="Dice">
              🎲
            </span>
          </button>
        </div>

        {dice != null && (
          <div className="card-body row">
            <div className="col-12">
              <h5 style={{ color: "gray" }}>
                Zar <small> (1-6) </small>
              </h5>
              <h3 className="score">{format(dice)}</h3>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { play } = state;
  const { fetchingPlayNormal, dice, userName, password } = play;

  return {
    userName,
    password,
    fetchingPlayNormal,
    dice
  };
};

const mapDispatchToProps = dispatch => ({
  playNormal: postData => {
    dispatch(playNormal(postData));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayNormal);
