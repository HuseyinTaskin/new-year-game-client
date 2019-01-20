import React from "react";
import { format } from "../helpers/format";

class ListBottom extends React.Component {
  render() {
    const { listN, userCount } = this.props;

    return (
      <div>
        {listN.length > 1 && (
          <div className="card">
            <h4 className="card-header" title="Last 5">
              <span role="img" aria-label="Bottom-List">
                ⚡
              </span>
            </h4>
            <div className="card-body" style={{ padding: "0px" }}>
              <table className="table table-striped table-sm table-responsive">
                <tbody>
                  {listN.map((item, i) => (
                    <tr key={`keybottom-${item._id}`}>
                      <td style={{ textAlign: "right", color: "gray" }}>
                        {userCount - listN.length + 1 + i}.
                      </td>
                      <td style={{ textAlign: "left", width: "50%" }}>
                        <div>{item.userName}</div>
                      </td>
                      <td
                        style={{ textAlign: "right", width: "50%" }}
                        title={`⚁ ${item.click1}, ⚁⚁ ${item.click3}, 🎰 ${
                          item.click2
                        }, 💣 ${item.click4}`}
                      >
                        {" "}
                        <div>{format(item.score)}</div>
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

export default ListBottom;
