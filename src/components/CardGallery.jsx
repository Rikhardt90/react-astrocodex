import "../styles/Card.scss";

export default function Gallery({ cards }) {


  return (
    <div className="card-container">
      {cards.map((card) => (
        <div className="body-card" key={card.id}>
          <iframe className="body-image" src={`http://server1.sky-map.org/skywindow?ra=${card.ra}&de=${card.dec}&zoom=10&img_source=SDSS`} title="image"></iframe>
          <h2>{card.name}</h2>
          <h3>{card.hubble} type {card.definition}</h3>
        </div>
      ))}

    </div>
  );
}
