import React, { Component } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import axios from "axios";

class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: null,
      //match: null
    };
  }

  async componentDidMount() {
    const questions = (await axios.get("/routes/questions")).data; // WORKING********************CHANGED "http://localhost:4000/"
    this.setState({
      questions,
    });
  }

  async componentWillMount() {
    /*
    let match = useRouteMatch();
    this.setState({
      match
    });
    */
  }

  render() {
    return (
      <div className="container">
        <Link to="discussion-page/new-question">
          <div className="card text-white bg-secondary mb-3">
            <div className="card-header">Need help? Ask here!</div>
            <div className="card-body">
              <h4 className="card-title">+ New Question</h4>
              <p className="card-text">Don't worry. Help is on the way!</p>
            </div>
          </div>
        </Link>
        <div className="row">
          {this.state.questions === null && <p>Loading questions...</p>}
          {this.state.questions &&
            this.state.questions.map((question) => (
              <div key={question._id} className="col-sm-12 col-md-4 col-lg-3">
                <Link to={`/discussion-page/question/${question._id}`}>
                  <div className="card text-white bg-success mb-3">
                    <div className="card-header">
                      Answers: {question.answers.length}
                    </div>
                    <div className="card-body">
                      <h4 className="card-title">{question.title}</h4>
                      <p className="card-text">{question.description}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default Questions;