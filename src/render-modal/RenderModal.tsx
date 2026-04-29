import { useState, useEffect } from 'react'
import './RenderModal.css';
import Swal from 'sweetalert2';

interface User {
  firstName: string,
  lastName: string,
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

  

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    await onSave(formData);

    await Swal.fire({
      title: 'Reserva confirmada',
      text: 'Tu mesa ha sido reservada correctamente. Te esperamos en Las Brasas.',
      icon: 'success',
      confirmButtonText: 'Perfecto',
      confirmButtonColor: '#d4af37',
      background: '#0f0f0f',
      color: '#ffffff',
      iconColor: '#d4af37',
      backdrop: true,
      showClass: {
        popup: 'swal2-show'
      },
      hideClass: {
        popup: 'swal2-hide'
      }
    });

    onClose();
    

  } catch (error) {
    Swal.fire({
      title: 'Error',
      text: 'No se pudo completar la reserva. Intenta nuevamente.',
      icon: 'error',
      confirmButtonColor: '#d4af37',
      background: '#0f0f0f',
      color: '#fff'
    });
  }
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
           
          />

          <label>Last Name</label>
          <input
            name="lastName"
            value={formData.lastName}
          />

          <button type="submit" className="save-button">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};
