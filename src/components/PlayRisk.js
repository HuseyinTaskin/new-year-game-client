import React from "react";
import { connect } from "react-redux";
import { playRisk } from "../redux/actions";
import { format } from "../helpers/format";
import green from "../images/green.gif";
import red from "../images/red.gif";

class PlayRisk extends React.Component {
  render() {
    const {
      fetchingPlayRisk,
      dice2,
      userName1,
      userName2,
      userName,
      password
    } = this.props;
    return (
      <div className="card">
        <div className="card-header">Risk budur</div>
        <div className="card-header">
          <button
            className="btn btn-danger bold"
            title="Risk Budur"
            onClick={() => this.props.playRisk({ userName, password })}
            disabled={fetchingPlayRisk || !userName || !password}
            style={{ fontSize: "2em", width: "50%" }}
          >
            <span role="img" aria-label="slot_machine">
              🎰
            </span>
          </button>
        </div>
        {dice2 != null && (
          <div className="card-body pl-0 pr-0 pb-0">
            {dice2 > 0 && (
              <div>
                <div className="col-12">
                  <h5 style={{ color: "gray" }}>
                    Risk Budur
                    <small> (±777) </small>
                  </h5>
                  <h3 className="score" style={{ color: "green" }}>
                    {format(dice2)}
                  </h3>
                </div>
                <br />
                <div className="card-footer">
                  <h4>
                    {userName2}{" "}
                    <img src={green} alt="-->" width="15" height="15" />
                    <img src={green} alt="-->" width="15" height="15" />{" "}
                    {userName1}
                  </h4>
                  <h5>Ayıp ayıp. {userName2}'ın çaldın tüm emeğini.</h5>
                </div>
              </div>
            )}

            {dice2 < 0 && (
              <div>
                <div>
                  <h5 style={{ color: "gray" }}>
                    Risk Budur
                    <small> (±777) </small>
                  </h5>
                  <h3 className="score" style={{ color: "red" }}>
                    {format(dice2)}
                  </h3>
                </div>
                <br />
                <div className="card-footer">
                  <h4>
                    {userName1}{" "}
                    <img src={red} alt="-->" width="15" height="15" />
                    <img src={red} alt="-->" width="15" height="15" />{" "}
                    {userName2}
                    <br />
                  </h4>
                  <h5>Çok cömertsin {userName2}'e çalıştın.</h5>
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
    fetchingPlayRisk,
    dice2,
    userName1,
    score,
    userName2,
    score2,
    userName,
    password
  } = play;

  return {
    userName,
    password,
    fetchingPlayRisk,
    dice2,
    userName1,
    score,
    userName2,
    score2
  };
};

const mapDispatchToProps = dispatch => ({
  playRisk: postData => {
    dispatch(playRisk(postData));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayRisk);
