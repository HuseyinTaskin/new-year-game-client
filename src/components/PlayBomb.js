import React from "react";
import { connect } from "react-redux";
import { playBomb } from "../redux/actions";
import { format } from "../helpers/format";
import green from "../images/green.gif";
import red from "../images/red.gif";
class PlayBomb extends React.Component {
  render() {
    const {
      fetchingPlayBomb,
      win,
      dice4,
      userName3,
      userName4,
      userName,
      password
    } = this.props;
    return (
      <div className="card">
        <div className="card-header">Risk nedir?</div>
        <div className="card-header">
          <button
            className="btn btn-success bold"
            title="Al gülüm ver gülüm"
            onClick={() => this.props.playBomb({ userName, password })}
            disabled={fetchingPlayBomb || !userName || !password}
            style={{ fontSize: "2em", width: "50%" }}
          >
            <span role="img" aria-label="">
              💣
            </span>
          </button>
        </div>
        {dice4 != null && win != null && (
          <div className="card-body pl-0 pr-0 pb-0">
            {win > 0 && (
              <div>
                <div className="col-12">
                  <h5 style={{ color: "gray" }}>
                    Yarı yarıya
                    <small> (± %50) </small>
                  </h5>
                  {dice4 > 0 && (
                    <h3 className="score" style={{ color: "green" }}>
                      {format(dice4)}
                    </h3>
                  )}
                  {dice4 < 0 && (
                    <h3 className="score" style={{ color: "red" }}>
                      {format(dice4)}
                    </h3>
                  )}
                </div>
                <br />
                <div className="card-footer">
                  {dice4 > 0 && (
                    <h4>
                      {userName4}{" "}
                      <img src={green} alt="-->" width="15" height="15" />
                      <img src={green} alt="-->" width="15" height="15" />{" "}
                      {userName3}
                    </h4>
                  )}

                  {dice4 < 0 && (
                    <h4>
                      {userName4}{" "}
                      <img src={red} alt="-->" width="15" height="15" />
                      <img src={red} alt="-->" width="15" height="15" />{" "}
                      {userName3}
                    </h4>
                  )}
                  <h5>
                    {userName4}'den sana {dice4} puan.
                  </h5>
                </div>
              </div>
            )}

            {win < 0 && (
              <div>
                <div>
                  <h5 style={{ color: "gray" }}>
                    Yarı yarıya
                    <small> (± %50) </small>
                  </h5>
                  {dice4 > 0 && (
                    <h3 className="score" style={{ color: "green" }}>
                      {format(dice4)}
                    </h3>
                  )}
                  {dice4 < 0 && (
                    <h3 className="score" style={{ color: "red" }}>
                      {format(dice4)}
                    </h3>
                  )}
                </div>
                <br />
                <div className="card-footer">
                  {dice4 < 0 && (
                    <h4>
                      {userName3}{" "}
                      <img src={red} alt="-->" width="15" height="15" />
                      <img src={red} alt="-->" width="15" height="15" />{" "}
                      {userName4}
                    </h4>
                  )}
                  {dice4 > 0 && (
                    <h4>
                      {userName3}{" "}
                      <img src={green} alt="-->" width="15" height="15" />
                      <img src={green} alt="-->" width="15" height="15" />{" "}
                      {userName4}
                    </h4>
                  )}
                  <h5>
                    Senden {userName4}'e {dice4 * -1} puan.
                  </h5>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { play } = state;
  const {
    fetchingPlayBomb,
    dice4,
    win,
    userName3,
    userName4,
    userName,
    password
  } = play;

  return {
    userName,
    password,
    fetchingPlayBomb,
    win,
    dice4,
    userName3,
    userName4
  };
};

const mapDispatchToProps = dispatch => ({
  playBomb: postData => {
    dispatch(playBomb(postData));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayBomb);
