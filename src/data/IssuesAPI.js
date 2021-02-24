import axios from "axios";
import { uuid } from "uuidv4";

export default class IssuesAPI {
  static getAllIssues() {
    return axios
      .get("http://localhost:3001/issues")
      .then((response) => response.data)
      .catch((error) => console.log(error));
  }

  static addIssue(issue) {
    issue.id = uuid();
    return axios
      .post("http://localhost:3001/issues", issue)
      .then((res) => issue)
      .catch((err) => console.log(err));
  }
}
