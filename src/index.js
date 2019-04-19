import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'

const App = () => {
    return (
        <div className="ui container comments"> 
            <CommentDetail author= "Fadli"/>
            <CommentDetail author= "Alex"/>
            <CommentDetail author= "Sam"/>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))