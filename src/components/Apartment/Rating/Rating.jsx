function StarRating({ rating }) {
  console.log("Rating received:", rating);
  if (!rating) {
    console.error("Rating prop is missing or invalid.");
    return null; // Ajoutez cette vérification pour déboguer
  }

  const numericRating = parseInt(rating, 10);
  const maxStars = 5;
  const stars = [];

  for (let i = 0; i < numericRating; i++) {
    stars.push(
      <i key={i} className="fas fa-star" style={{ color: "#ff6060" }}></i>
    );
  }

  for (let i = numericRating; i < maxStars; i++) {
    stars.push(
      <i key={i + 5} className="fas fa-star" style={{ color: "#E3E3E3" }}></i>
    );
  }

  return <div className="star-rating">{stars}</div>;
}

export default StarRating;
