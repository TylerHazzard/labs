import { useState, FormEvent } from 'react';

interface Contact {
  firstName: string;
  lastName: string;
  phoneNumber: number;
  isFavorite: boolean;
}

interface ContactFormProps {
  onAdd: (contact: Contact) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onAdd }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState<number | ''>('');
  const [isFavorite, setIsFavorite] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = (): boolean => {
    const errors: { [key: string]: string } = {};
    if (!firstName) errors.firstName = 'First name is required.';
    if (!lastName) errors.lastName = 'Last name is required.';
    if (phoneNumber === '' || phoneNumber.toString().length !== 10) errors.phoneNumber = 'Phone number must be 10 digits.';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onAdd({ firstName, lastName, phoneNumber: Number(phoneNumber), isFavorite });
      setFirstName('');
      setLastName('');
      setPhoneNumber('');
      setIsFavorite(false);
      setErrors({});
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      {errors.firstName && <p className="error">{errors.firstName}</p>}
      <input
        type="text"
        placeholder="Last name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      {errors.lastName && <p className="error">{errors.lastName}</p>}
      <input
        type="number"
        placeholder="Phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(Number(e.target.value))}
      />
      {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
      <label>
        Favorite
        <input
          type="checkbox"
          checked={isFavorite}
          onChange={(e) => setIsFavorite(e.target.checked)}
        />
      </label>
      <button className="button" type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
