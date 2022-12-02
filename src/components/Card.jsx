import "../styles/Card.scss";

export default function Gallery({ bodies }) {

  return (
    <div className="card-container">
      {bodies.map((item) => (
        <div className="body-card" key={item}>
          <iframe className="body-image" SRC="http://server1.sky-map.org/skywindow?ra=38.5&de=40&zoom=3&img_source=SDSS">asdf</iframe>
          
 
          <h3>{item.fields.name}</h3>
        </div>
      ))} 

    </div>
  );
}
