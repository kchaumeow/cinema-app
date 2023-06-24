import Image from "next/image";
export default async function Review({review}){
  return (
    <div className="review card">
      <Image src="/images/reviewer.svg" width={100} height={100}/>
      <div className="reviewData">
        <div className="name_rating">
          <div className="descTitle">{review.name}</div>
          <div><span className="large_roboto">Оценка: </span><span className="strong_roboto">{review.rating}</span></div>
        </div>
        <div className="description">{review.text}</div>
      </div>
    </div>
  )
}

