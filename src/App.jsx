import { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import List from "./components/List";

function App() {
  let [isTrue, setIsTrue] = useState(true);
  let [text, setText] = useState({ name: "" });
  let [array, setArray] = useState([{ name: "" }]);
  function updateArray() {
    setText({ name: "" });
    setArray((prevValue) => {
      console.log([...prevValue, text]);
      return [...prevValue, text];
    });
    setIsTrue(true);
  }
  function deleteElem(id) {
    setArray((prevArray) => {
      let l = [...prevArray];
      l.splice(id, 1);
      console.log(l);
      return l;
    });
  }
  function userType(event) {
    const { name, value } = event.target;
    setText({ [name]: value });
  }
  function editContent(id) {
    setText(() => {
      let l = array;
      return l[id];
    });
    console.log(array);
    setIsTrue(false);
    setArray((prevArray) => {
      let l = [...prevArray];
      l.splice(id, 1);
      console.log(l);
      return l;
    });
    console.log(array);
  }
  return (
    <>
      <Header />
      <div className="container">
        <div className="body">
          <Content
            function={updateArray}
            text={text}
            userType={userType}
            addOrSave={isTrue}
          />
          <ul>
            {array.map((x, index) => {
              return (
                <List
                  key={index}
                  id={index}
                  activity={x.name}
                  delete={deleteElem}
                  edit={editContent}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
