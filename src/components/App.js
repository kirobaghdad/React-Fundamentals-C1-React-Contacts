import React from "react";
import "../css/App.css";
import ListContacts from "./ListContacts";
// {
//   React.createElement(
//     "div",
//     null,
//     React.createElement("img", null, contact.avatarURL),
//     React.createElement("h2", null, contact.name),
//     React.createElement("h1", null, contact.handle)
//   );
// }

const App = () => {
  const contacts = [
    {
      id: "karen",
      name: "Karen Isgrigg",
      handle: "karen_isgrigg",
      avatarURL: "http://localhost:5001/karen.jpg",
    },
    {
      id: "richard",
      name: "Richard Kalehoff",
      handle: "richardkalehoff",
      avatarURL: "http://localhost:5001/richard.jpg",
    },
    {
      id: "tyler",
      name: "Tyler McGinnis",
      handle: "tylermcginnis",
      avatarURL: "http://localhost:5001/tyler.jpg",
    },
  ];
  //console.log(contacts[0]);
  //return ListContacts(contacts);
  return <ListContacts contacts={contacts} />;
};

export default App;
