import { useState, useEffect } from 'react'
import './RenderModal.css';


interface User {
  firstName: string,
  lastName: string,
  onTable: boolean,
}

interface Props {
  isOpen: boolean,
  onClose: () => void,
  onSave: (user: User) => Promise<void>;
  user?: User;
}


export const RenderModal: React.FC<Props> = ({
  isOpen,
  onClose,
  onSave,
  user
}) => {

  const [formData, setFormData] = useState<User>({
    firstName: '',
    lastName: '',
    onTable: false,
  });

  // Cargar datos si hay usuario
  useEffect(() => {
    if (user) {
      setFormData(user);
    }
  }, [user]);

  // Cerrar con ESC
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox'
        ? checked
        : name === 'balance'
          ? Number(value)
          : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await onSave(formData);
    onClose();
  };

  return (
    <div className="modal-container" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>

        <button className="close-btn" onClick={onClose}>
          ×
        </button>

        <form onSubmit={handleSubmit}>
          <span className="span-users">Users</span>

          <label>First Name</label>
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />

          <label>Last Name</label>
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />

          <div>
            <input
              type="checkbox"
              name="onTable"
              checked={formData.onTable}
              onChange={handleChange}
            />
            <label> Is Active</label>
          </div>

          <button type="submit" className="save-button">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};
