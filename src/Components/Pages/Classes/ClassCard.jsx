const ClassCard = ({ classN }) => {
  const { className, category, trainerName, img, trainerId } = classN;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{className}</h2>
        <p>{category}</p>
        {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
      </div>
      <figure>
        <img
          src={img}
          alt="Shoes"
        />
      </figure>
    </div>
  );
};

export default ClassCard;
