import ContactCard from './ContactCard';

interface Contact {
  firstName: string;
  lastName: string;
  phoneNumber: number;
  isFavorite: boolean;
}

interface ContactListProps {
  contacts: Contact[];
  onDelete: (phoneNumber: number) => void;
  onUpdate: (phoneNumber: number) => void;
}

const ContactList: React.FC<ContactListProps> = ({ contacts, onDelete, onUpdate }) => {
  return (
    <div className="contact-list">
      {contacts.map(contact => (
        <ContactCard 
          key={contact.phoneNumber} 
          contact={contact} 
          onDelete={onDelete} 
          onUpdate={onUpdate} 
        />
      ))}
    </div>
  );
};

export default ContactList;
