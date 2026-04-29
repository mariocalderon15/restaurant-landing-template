import './reservaBtn.css'
import { useLanguage } from '../../context/LenguageContext';


interface Props {
    onOpen: () => void;
}

export const ReservaBtn: React.FC<Props> = ({onOpen}) => {
    const {t} = useLanguage();

   
  return (
    <div>
         <div className="hero-content">
        <button className="reserve-btn" onClick={onOpen}>{t.reserve}</button>
      </div>
    </div>
  )
}
