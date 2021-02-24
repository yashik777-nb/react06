import React from "react";
import Issue from "../../components/Issue/Issue";
import AllIssuesCSS from "./AllIssues.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
class AllIssues extends React.Component {
  render() {
    let issuesList = this.props.issues.map((issue) => (
      <Issue
        key={issue.id}
        id={issue.id}
        issueDescription={issue.issueDescription}
        severity={issue.severity}
        status={issue.status}
      />
    ));

    return (
      <div>
        <h1 className={AllIssuesCSS.issuesListHeader}>Issues List</h1>
        <table className={AllIssuesCSS.border}>
          <thead>
            <tr>
              <th>Issue Description</th>
              <th>Severity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>{issuesList}</tbody>
        </table>
        <Link to="/addIssue">Add Issue</Link>
      </div>
    );
  }
}

// mapStateToProps
const mapStateToProps = (state) => {
  return {
    issues: state.issues,
  };
};

export default connect(mapStateToProps)(AllIssues);
