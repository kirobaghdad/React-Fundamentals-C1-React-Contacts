import PropTypes from "prop-types";

const ListContacts = ({ contacts, removeContact }) => (
  <ul className="contact-list">
    {contacts.map((contact, index) => (
      <li key={contact.id} className="contact-list-item">
        <div
          className="contact-avatar"
          style={{ backgroundImage: `url(${contact.avatarURL})` }}
        ></div>
        <div className="contact-details">
          <p>{contact.name}</p>
          <p>@{contact.handle}</p>
        </div>
        <button
          className="contact-remove"
          onClick={() => {
            removeContact(contact);
          }}
        ></button>
      </li>
    ))}
  </ul>
);

ListContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  removeContact: PropTypes.func.isRequired,
};

export default ListContacts;

/*
<li
        key={contact.id}
        style={{
          borderStyle: "solid",
          borderColor: "blue",
          margin: 30,
          height: 55,
        }}
      >
        <div>
          <div style={{ float: "left" }}>
            <img height={50} src={contact.avatarURL}></img>
          </div>
          <div style={{ float: "left" }}>
            {contact.name} <br></br> {contact.id}
          </div>
          <div style={{ float: "right", margin: "13px" }}>
            <button style={{ borderRadius: "40px" }}>X</button>
          </div>
        </div>
      </li>
*/
