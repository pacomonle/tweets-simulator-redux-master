import React from "react";
// imports bootstrap
import { Card, Button } from "react-bootstrap";
// imports hooks redux
import { useDispatch, useSelector } from "react-redux";
// imports actions
import { deleteTweetAction } from "../actions/tweetsActions";

const TweetList = ()  =>  {
  const tweets = useSelector(state => state.tweets.tweets);
  // renderizar cada tweet
  return tweets.map(tweet => <Tweet key={tweet.id} tweet={tweet} />);
}

// constante para renderizar tweet
const Tweet = (props) => {
  // destructuring
  const { tweet } = props;
  // hook dispatch
  const dispatch = useDispatch();
  // action 
  const deleteTweet = id => dispatch(deleteTweetAction(id));

  return (
    <Card className="mb-3 mt-3">
      <Card.Body>
        <Card.Title>{tweet.name}</Card.Title>
        <Card.Text>{tweet.tweet}</Card.Text>
        <Button variant="danger" onClick={() => deleteTweet(tweet.id)}>
          Eliminar Tweet
        </Button>
      </Card.Body>
    </Card>
  );
}
export default TweetList