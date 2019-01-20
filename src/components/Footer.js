import React from "react";
import { connect } from "react-redux";

class Footer extends React.Component {
  render() {
    const { userCount, clickCount } = this.props;

    return (
      <div>
        <div className="card-header mt-4">
          <div style={{ color: "gray" }}>
            Oyuncu sayısı: {userCount}
            <br />
            Tıklanma sayısı: {clickCount}
          </div>
        </div>

        <div className="card-header" style={{ color: "gray" }}>
          <h5>Not</h5>
          ilk 3'e sürpriz 🎁
          <br />
          Son 3'e de sürpriz ☠️
        </div>

        <div className="card-header mb-2" style={{ color: "gray" }}>
          <h5>Hakkımda</h5>
          Ben yaptım.
          <br />
          V1.0.0 (Bikerede yaptım)
          <br />
          Bozmayın.
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { data } = state;
  const { userCount, clickCount } = data;

  return {
    userCount,
    clickCount
  };
};

export default connect(mapStateToProps)(Footer);
