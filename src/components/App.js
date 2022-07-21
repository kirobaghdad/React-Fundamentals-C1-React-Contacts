import React from "react";
import "../css/App.css";
import ListContacts from "./ListContacts";
import { useState } from "react";

// {
//   React.createElement(
//     "div",
//     null,
//     React.createElement("img", null, contact.avatarURL),
//     React.createElement("h2", null, contact.name),
//     React.createElement("h1", null, contact.handle)
//   );
// }

var orgContacts = [
  {
    id: "karen",
    name: "xKaren Isgrigg",
    handle: "karen_isgrigg",
    avatarURL: "http://localhost:5001/karen.jpg",
  },
  {
    id: "richard",
    name: "xRichard Kalehoff",
    handle: "richardkalehoff",
    avatarURL: "http://localhost:5001/richard.jpg",
  },
  {
    id: "tyler",
    name: "xTyler McGinnis",
    handle: "tylermcginnis",
    avatarURL: "http://localhost:5001/tyler.jpg",
  },
  {
    id: "x",
    name: "x",
    handle: "tylermcginnis",
    avatarURL: "http://localhost:5001/tyler.jpg",
  },
  {
    id: "y",
    name: "xy",
    handle: "tylermcginnis",
    avatarURL: "http://localhost:5001/tyler.jpg",
  },
  {
    id: "tyler1",
    name: "Tyller McGinnis",
    handle: "tylermcginnis",
    avatarURL: "http://localhost:5001/tyler.jpg",
  },
];

const App = () => {
  const [contacts, setContacts] = useState(orgContacts);

  const [search, setSearch] = useState("");
  const removeContact = (contact) => (
    (orgContacts = orgContacts.filter((c) => c.id !== contact.id)),
    setContacts(orgContacts)
  );

  const searchContacts = (s) => {
    setSearch(s);
    setContacts(
      orgContacts.filter((contact) =>
        contact.name.toLowerCase().includes(s.toLowerCase())
      )
    );
  };

  const resetContacts = () => (setSearch(""), setContacts(orgContacts));

  return (
    <div>
      <div>
        <input
          className="input-field"
          value={search}
          type="text"
          placeholder="Search Contacts"
          onChange={(event) => searchContacts(event.target.value)}
        />

        {search.length > 0 && (
          <div className="info-div">
            <span>
              Now showing {contacts.length} of {orgContacts.length}{" "}
              <button className="button" onClick={resetContacts}>
                Show All!
              </button>
            </span>
          </div>
        )}
      </div>

      <ListContacts
        contacts={contacts}
        removeContact={removeContact}
        className="list-contacts"
        //removeContact2={removeContact2}
      />
      {/* <button
        onClick={() =>
          setContacts(contacts.pop(), contacts.length--, console.log(contacts))
        }
      >
        Remove Last Contact
      </button> */}
    </div>
  );
};

export default App;
