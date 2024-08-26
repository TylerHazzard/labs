import { useState } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

interface Contact {
  firstName: string;
  lastName: string;
  phoneNumber: number;
  isFavorite: boolean;
}

const Home: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([
    { firstName: 'John', lastName: 'Doe', phoneNumber: 1234567890, isFavorite: true },
    { firstName: 'Jane', lastName: 'Smith', phoneNumber: 2345678901, isFavorite: false }
  ]);
  const [filter, setFilter] = useState<'all' | 'favorites'>('all');

  const addContact = (contact: Contact) => {
    setContacts([...contacts, contact]);
  };

  const deleteContact = (phoneNumber: number) => {
    setContacts(contacts.filter(contact => contact.phoneNumber !== phoneNumber));
  };

  const updateContact = (phoneNumber: number) => {
    setContacts(contacts.map(contact => 
      contact.phoneNumber === phoneNumber
        ? { ...contact, isFavorite: !contact.isFavorite }
        : contact
    ));
  };

  const filteredContacts = filter === 'favorites'
    ? contacts.filter(contact => contact.isFavorite)
    : contacts;

  return (
    <div className="home">
      <ContactForm onAdd={addContact} />
      <div className="filter-buttons">
        <button 
          className={`button ${filter === 'all' ? 'active' : ''}`} 
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          className={`button ${filter === 'favorites' ? 'active' : ''}`} 
          onClick={() => setFilter('favorites')}
        >
          Favorites
        </button>
      </div>
      <ContactList 
        contacts={filteredContacts} 
        onDelete={deleteContact} 
        onUpdate={updateContact} 
      />
    </div>
  );
};

export default Home;
