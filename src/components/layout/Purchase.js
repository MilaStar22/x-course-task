import sprite from "../img/sprites.svg";


export default function Purchase() {

  return (
    <div className="bucket_wrapper">
      <button className="btn_purchase">Purchase</button>
      <div className="empty_bucket container">
        <svg><use href={sprite + "#bucket"} alt="bucket"/></svg>
        <p>Cart empty... Add some books!</p>
      </div>
    </div>
  )
}