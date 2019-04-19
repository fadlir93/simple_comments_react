import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'

const App = () => {
    return (
        <div className="ui container comments"> 
            <CommentDetail 
                author= "Fadli" 
                timeAgo="Today at 3:40PM" 
                comment="This no solution"
                avatar= {faker.image.avatar()}
            />
            <CommentDetail 
                author= "Alex" 
                timeAgo="Today at 10.00PM" 
                comment="Actually this good for me"
                avatar= {faker.image.avatar()}
            />
            <CommentDetail 
                author= "Sam" 
                timeAgo="Today at 11.00AM" 
                comment="Nice blog post!"
                avatar= {faker.image.avatar()}
            />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))