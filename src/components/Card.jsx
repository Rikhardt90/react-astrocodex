//import "../../styles/Characters.scss";

export default function Gallery({ bodies }) {
  return (
    <div className="bodies">
      
      {bodies.map((item) => (
        <div className="body-card" key={item.id}>
          console.log(bodies);
          <h3>{item.name}</h3>
          <img src={item.image} alt={item.name} />

          <p>{item.gender}</p>
          <p>Status: {item.status}</p>
        </div>
      ))} 

    </div>
  );
}
