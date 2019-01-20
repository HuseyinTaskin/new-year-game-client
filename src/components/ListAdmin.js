import React from "react";
import { format } from "../helpers/format";

class ListAdmin extends React.Component {
  render() {
    const { listAdmin } = this.props;

    return (
      <div>
        {//   userName === "admin" &&
        //    password === "admin1?" &&
        listAdmin.length > 1 && (
          <div className="card">
            <h4 className="card-header" title="Top Clicker">
              <span role="img" aria-label="Bottom-List">
                🌟
              </span>
            </h4>
            <div className="card-body" style={{ padding: "0px" }}>
              <table className="table table-striped table-sm table-responsive">
                <thead>
                  <tr>
                    <th style={{ width: "1%", textAlign: "left" }}>#</th>
                    <th style={{ width: "100%", textAlign: "left" }}>
                      <span role="img" aria-label="Bottom-List">
                        👤
                      </span>
                    </th>
                    <th style={{ textAlign: "right" }}>
                      <span role="img" aria-label="Bottom-List">
                        🎲
                      </span>
                    </th>
                    <th style={{ textAlign: "right", whiteSpace: "nowrap" }}>
                      <span
                        className="small"
                        role="img"
                        aria-label="Bottom-List"
                      >
                        🎲🎲
                      </span>
                    </th>
                    <th style={{ textAlign: "right" }}>
                      <span role="img" aria-label="Bottom-List">
                        🎰
                      </span>
                    </th>
                    <th style={{ textAlign: "right" }}>
                      <span role="img" aria-label="Bottom-List">
                        💣
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {listAdmin.map((item, i) => (
                    <tr key={`keyadmin-${i}`}>
                      <td
                        style={{
                          textAlign: "left",
                          color: "gray",
                          width: "20%"
                        }}
                      >
                        {i === 0 && <div>En Dürüst</div>}
                        {i === 1 && <div>En Hileci</div>}
                        {i === 2 && <div>En Cesur</div>}
                        {i === 3 && <div>En Çılgın</div>}
                      </td>
                      <td
                        style={{ textAlign: "left" }}
                        title={`⚁ ${item.click1}, ⚁⚁ ${item.click3}, 🎰 ${
                          item.click2
                        }, 💣 ${item.click4}`}
                      >
                        <div>{item.userName}</div>
                      </td>
                      <td style={{ textAlign: "right" }}>
                        <div>{format(item.click1)}</div>
                      </td>
                      <td style={{ textAlign: "right" }}>
                        <div>{format(item.click3)}</div>
                      </td>
                      <td style={{ textAlign: "right" }}>
                        <div>{format(item.click2)}</div>
                      </td>
                      <td style={{ textAlign: "right" }}>
                        <div>{format(item.click4)}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ListAdmin;
