import Heading from "./components/Heading";
import Section from "./components/Section";
import Counter from "./components/Counter";
import List from "./components/List";

import {useState} from "react"

function App() {

  const [count, setCount] = useState(1)

  return(
    <>
      <Heading title={"Hello"} />
      <Section title={"different title"}>This is my section.</Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
      <List items={["coffee", "tacos", "code"]} render={(item: string) => <span className="bold">{item}</span>} />
    </>
  );
}

export default App
