import "./MtgCard.css";
import { Link } from "react-router-dom";
import supabase from "../../config/CreateClient.jsx";

export const MtgCard = ({ card, onDelete }) => {
  const handleDelete = async () => {
    const { data, error } = await supabase
      .from("cards")
      .delete()
      .eq("id", card.id)
      .select();

    if (error) {
      console.log(error);
      return;
    }

    if (data) {
      console.log(data);
      onDelete(card.id);
      return;
    }
  };
  return (
    <div>
      <div className="card-container">
        <div className="card-background">
          <div className="card-frame">
            <div className="frame-header">
              <div className="name">
                <Link to={"view/" + card.id}>{card.card_title}</Link>
              </div>
            </div>
            <div className="frame-art">Image Here</div>
            <div className="frame-type-line">
              {card.card_type} - {` ${card.card_subtype}`}
            </div>
            <div className="frame-text-box">
              <div className="abilities-text">{card.abilities_text}</div>
              <div className="flavor-text">"{card.flavor_text}"</div>
            </div>
          </div>
        </div>
      </div>
      <div className="edit_button">
        <Link to={"/update/" + card.id}>
          <i className="material-icons">edit</i>
        </Link>
        <i className="material-icons" onClick={handleDelete}>
          delete
        </i>
      </div>
    </div>
  );
};