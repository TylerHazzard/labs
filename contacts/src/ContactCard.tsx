
interface Contact {
  firstName: string;
  lastName: string;
  phoneNumber: number;
  isFavorite: boolean;
}

interface ContactCardProps {
  contact: Contact;
  onDelete: (phoneNumber: number) => void;
  onUpdate: (phoneNumber: number) => void;
}

const ContactCard: React.FC<ContactCardProps> = ({ contact, onDelete, onUpdate }) => {
  const { firstName, lastName, phoneNumber, isFavorite } = contact;

  const formatPhoneNumber = (number: number): string => {
    const phoneStr = number.toString();
    return phoneStr.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
  };

  return (
    <div className="contact-card">
      <div>
        <strong>{firstName} {lastName}</strong>
        <p>{formatPhoneNumber(phoneNumber)}</p>
      </div>
      <div className="icon-container">
        <i 
          className="fa-solid fa-trash icon"
          onClick={() => onDelete(phoneNumber)}
        ></i>
        <i 
          className={`fa${isFavorite ? 's' : 'r'} fa-heart favorite-icon icon`}
          onClick={() => onUpdate(phoneNumber)}
        ></i>
      </div>
    </div>
  );
};

export default ContactCard;
