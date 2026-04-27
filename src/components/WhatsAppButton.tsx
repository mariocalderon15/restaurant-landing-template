

export default function WhatsAppButton() {
  const phone = "34614418570"; 
  const message = "Hola, me gustaría reservar una mesa";

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
        alt="WhatsApp"
      />
    </a>
  );
}