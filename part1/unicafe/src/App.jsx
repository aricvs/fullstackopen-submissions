import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const handleClick = () => {
  console.log("test");
};

const DisplayStats = ({ statCategory, statCounter }) => {
  return (
    <p>
      {statCategory} {statCounter}
    </p>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const raiseGood = () => setGood(good + 1);
  const raiseNeutral = () => setNeutral(neutral + 1);
  const raiseBad = () => setBad(bad + 1);

  return (
    <>
      <h1>give feedback</h1>
      <Button onClick={raiseGood} text="good" />
      <Button onClick={raiseNeutral} text="neutral" />
      <Button onClick={raiseBad} text="bad" />
      <h1>statistics</h1>
      <DisplayStats statCategory="good" statCounter={good} />
      <DisplayStats statCategory="neutral" statCounter={neutral} />
      <DisplayStats statCategory="bad" statCounter={bad} />
    </>
  );
};

export default App;
