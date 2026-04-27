
import { useLanguage } from '../context/LenguageContext'


export const Location = () => {
    const { t } = useLanguage();
    return (
        <div>
            <section className="section" id="location">
                <h2>{t.location}</h2>

                <div className="map-container">
                    <iframe
                        title="ubicación"
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d13542.750523477358!2d-3.6185384060466945!3d40.542914798831106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1ses!2ses!4v1777226093279!5m2!1ses!2ses"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <a
                        href="https://www.google.com/maps"
                        target="_blank"
                    >
                        Abrir en Google Maps
                    </a>
                </div>
            </section>

        </div>
    )
}


