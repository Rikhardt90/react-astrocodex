import "../styles/Card.scss";

export default function Gallery({ bodies }) {


  return (
    <div className="card-container">
      {bodies.map((item) => (
        <div className="body-card" key={item.fields.id}>
          <iframe className="body-image" src={`http://server1.sky-map.org/skywindow?ra=${item.fields.ra}&de=${item.fields.dec}&zoom=10&img_source=SDSS`} title="image"></iframe>
          <h2>{item.fields.name}</h2>
          <h3>{item.fields.hubble} type {item.fields.object_definition}</h3>
        </div>
      ))} 

    </div>
  );
}
