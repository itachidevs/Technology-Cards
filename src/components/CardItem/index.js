import './index.css'

const TechnologyCard = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails

  return (
    <li className={className}>
      <h1 className="TechnologyCard-heading">{title}</h1>
      <p className="TechnologyCard-description">{description}</p>
      <div className="img-container">
        <img src={imgUrl} alt={title} className="image" />
      </div>
    </li>
  )
}
export default TechnologyCard
