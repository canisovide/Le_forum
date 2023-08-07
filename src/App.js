/* import './App.css'; */
import AskingQuestion from './components/specifique/AskingQuestion';
import { useState } from 'react';
import Question from './components/fonction/Question'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import './assets/css/bootstrap-icons.css'
import UserCome from './components/pages/UserCome';


function App() {
  const [question, setQuestion] = useState({})
  function createQuestion(newquestion) {
    setQuestion(newquestion)

  }
  const compQuestion = (<Question title={question.title} content={question.content}></Question>)


  return (
    <div className="App">
      {/* <AskingQuestion createQuestion={createQuestion}></AskingQuestion> */}
      <UserCome></UserCome>
    </div>
  );
}

export default App;
