import React, {Component} from 'react';
import QuestionList from './quiz/QuestionList.jsx';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            questions: [
                {
                    id: 1,
                    text: 'What is your name?',
                    choices: [
                        {
                            id: 'a',
                            text: 'Michael'
                        },
                        {
                            id: 'b',
                            text: 'Brad'
                        },
                        {
                            id: 'c',
                            text: 'Ivan'
                        }
                    ],
                    correct: 'b'
                },
                {
                    id: 2,
                    text: 'What is your mothers name?',
                    choices: [
                        {
                            id: 'a',
                            text: 'Sara'
                        },
                        {
                            id: 'b',
                            text: 'Sue'
                        },
                        {
                            id: 'c',
                            text: 'Julia'
                        }
                    ],
                    correct: 'c'
                },
                {
                    id: 3,
                    text: 'What is your fathers name?',
                    choices: [
                        {
                            id: 'a',
                            text: 'Dmitriy'
                        },
                        {
                            id: 'b',
                            text: 'Bob'
                        },
                        {
                            id: 'c',
                            text: 'Jack'
                        }
                    ],
                    correct: 'a'
                },
                {
                    id: 4,
                    text: 'What is your friends name?',
                    choices: [
                        {
                            id: 'a',
                            text: 'John'
                        },
                        {
                            id: 'b',
                            text: 'Oleg'
                        },
                        {
                            id: 'c',
                            text: 'Joe'
                        }
                    ],
                    correct: 'b'
                },
            ],
            score: 0,
            current: 1
        };
    }
    render(){
        return (
            <div>
                <QuestionList {...this.state} />
            </div>
        )
    }
}

export default App;