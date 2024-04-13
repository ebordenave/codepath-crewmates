import "./ViewCardComponent.css";
export const ViewCardComponent = ({
  card_title,
  converted_mana_cost,
  abilities_text,
  flavor_text,
  card_type,
  card_subtype,
  card_power,
  card_toughness,
}) => {
  return (
    <>
      <div className="view-card-container">
        <div className="view-card-background">
          <div className="view-card-frame">
            <div className="view-frame-header">
              <div className="view-name">{card_title}</div>
            </div>
            <div className="view-frame-art">Image Here</div>
            <div className="view-frame-type-line">
              <p>
                {card_type} - {card_subtype}
              </p>
            </div>
            <div className="view-frame-text-box">
              <div className="view-abilities-text">{abilities_text}</div>
              <div className="view-flavor-text">{flavor_text}</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>Converted Mana Cost: {converted_mana_cost}</p>
        <p>
          Power / Toughness: {card_power} / {card_toughness}
        </p>
      </div>
    </>
  );
};