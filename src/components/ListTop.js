import React from "react";
import { format } from "../helpers/format";

class ListTop extends React.Component {
  render() {
    const { list } = this.props;

    return (
      <div className="card">
        <h4 className="card-header" title="Top 10">
          <span role="img" aria-label="Top-List">
            ⭐
          </span>
        </h4>
        {list.length > 0 && (
          <div
            className="card-body"
            style={{ padding: "0px", textAlign: "center" }}
          >
            <table className="table table-striped table-sm table-responsive">
              <thead>
                <tr>
                  <th style={{ textAlign: "center" }}>#</th>
                  <th style={{ width: "100%", textAlign: "left" }}>
                    <span role="img" aria-label="Bottom-List">
                      👤
                    </span>
                  </th>
                  <th style={{ textAlign: "right" }}>
                    <span role="img" aria-label="Bottom-List">
                      🏆
                    </span>
                  </th>
                  <th style={{ textAlign: "right" }}>
                    <span role="img" aria-label="Bottom-List">
                      🎲
                    </span>
                  </th>
                  <th style={{ textAlign: "right", whiteSpace: "nowrap" }}>
                    <span className="small" role="img" aria-label="Bottom-List">
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
                {list.map((item, i) => (
                  <tr key={`key-${item._id}`}>
                    <td
                      style={{
                        textAlign: "center",
                        color: "gray",
                        width: "20%"
                      }}
                    >
                      {i === 0 && (
                        <span role="img" aria-label="Top-List">
                          🥇
                        </span>
                      )}
                      {i === 1 && (
                        <span role="img" aria-label="Top-List">
                          🥈
                        </span>
                      )}
                      {i === 2 && (
                        <span role="img" aria-label="Top-List">
                          🥉
                        </span>
                      )}
                      {i > 2 && <div>{i + 1}.</div>}
                    </td>
                    <td style={{ textAlign: "left" }}>
                      <div>{item.userName}</div>
                    </td>
                    <td
                      style={{ textAlign: "right" }}
                      title={`⚁ ${item.click1}, ⚁⚁ ${item.click3}, 🎰 ${
                        item.click2
                      }, 💣 ${item.click4}`}
                    >
                      <div>{format(item.score)}</div>
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
        )}
      </div>
    );
  }
}

export default ListTop;
