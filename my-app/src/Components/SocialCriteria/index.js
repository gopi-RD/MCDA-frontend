import { Component } from "react";
import "./index.css";

class SocialCriteria extends Component {
  constructor(props) {
    super(props);

    this.state = {
      criteria: ["Experience", "Safety", "Maintenance", "Finance", "Quality"],
      selectedValues: {}, 
      error: ""
    };
  }

  handleClick = (criterion, value) => {
    const { selectedValues } = this.state;

    // Toggle OFF if same value clicked again
    if (selectedValues[criterion] === value) {
      const updated = { ...selectedValues };
      delete updated[criterion];

      this.setState({
        selectedValues: updated,
        error: ""
      });
      return;
    }

    // Check duplicate value
    const alreadySelected = Object.entries(selectedValues).find(
      ([key, val]) => val === value && key !== criterion
    );

    if (alreadySelected) {
      this.setState({
        error: `Rank ${value} already selected for "${alreadySelected[0]}" ❌`
      });
      return;
    }

    // Update state
    this.setState({
      selectedValues: {
        ...selectedValues,
        [criterion]: value
      },
      error: ""
    });
  };

  render() {
    const { criteria, selectedValues, error } = this.state;

    return (
      <div className="container">
        <h2 className="ranking-title">Social Criteria Ranking</h2>

        <div className="table-wrapper">
          <table className="ranking-table">
            <thead className="ranking-thead">
              <tr className="ranking-tr">
                <th className="raking-th sticky-col">Criteria</th>
                {[1, 2, 3, 4, 5].map((num) => (
                  <th className="raking-th" key={num}>Rank {num}</th>
                ))}
              </tr>
            </thead>

            <tbody className="rankingtbody">
              {criteria.map((criterion) => (
                <tr key={criterion}>
                  <td className=" ranking-td sticky-col">{criterion}</td>

                  {[1, 2, 3, 4, 5].map((num) => {
                    const isChecked = selectedValues[criterion] === num;

                    return (
                      <td className="ranking-td" key={num}>
                        <input
                          type="radio"
                          checked={isChecked}
                          onClick={() =>
                            this.handleClick(criterion, num)
                          }
                          readOnly
                        />
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {error && <div className="error">{error}</div>}

        <div className="output">
          <h4>Selected Values:</h4>
          <pre>{JSON.stringify(selectedValues, null, 2)}</pre>
        </div>
      </div>
    );
  }
}

export default SocialCriteria;