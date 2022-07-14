const ListContacts = ({ contacts }) => {
  //   console.log(contacts);
  //   console.log({ contacts });
  return (
    //<div>Hello World</div>
    <ul className="contact-list">
      {contacts.map((contact) => (
        <li key={contact.id}>
          <img height={50} src={contact.avatarURL}></img>
          <ul>
            <li>
              <span>{contact.name} </span>
            </li>
            <li>
              <span>{contact.handle}</span>
            </li>
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default ListContacts;
