import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const HandleClick = () => {
  console.log("test");
};

const DisplayStats = ({ statCategory, statCounter }) => {
  return (
    <>
      <p>
        {statCategory} {statCounter}
      </p>
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <h1>give feedback</h1>
      <Button onClick={HandleClick} text="good" />
      <Button onClick={HandleClick} text="neutral" />
      <Button onClick={HandleClick} text="bad" />
      <h1>statistics</h1>
      <DisplayStats statCategory="good" statCounter={good} />
      <DisplayStats statCategory="neutral" statCounter={neutral} />
      <DisplayStats statCategory="bad" statCounter={bad} />
    </>
  );
};

export default App;
