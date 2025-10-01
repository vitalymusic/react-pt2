import './Card.css';

export default function Card(props) {
  return (
    <div className="card">
        <img src={props.src} alt={props.title} />
        <h5>{props.title}</h5>
    </div>
  )
}
