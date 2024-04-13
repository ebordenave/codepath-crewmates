import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import supabase from "../config/CreateClient.jsx";
import { ViewCardComponent } from "../components/ViewCardComponent/ViewCardComponent.jsx";

export const ViewCard = () => {
  const { id } = useParams();
  const [card, setCard] = useState(null);

  useEffect(() => {
    const fetchCard = async () => {
      const { data, error } = await supabase
        .from("cards")
        .select()
        .eq("id", id)
        .single();

      if (data) {
        setCard(data);
      }
    };
    fetchCard();
  }, [id]);

  return (
    <div className="page-wrapper">
      <h2>View Card Stats</h2>
      {card && (
        <ViewCardComponent
          card_title={card.card_title}
          card_type={card.card_type}
          card_subtype={card.card_subtype}
          abilities_text={card.abilities_text}
          flavor_text={card.flavor_text}
          converted_mana_cost={card.converted_mana_cost}
          card_power={card.card_power}
          card_toughness={card.card_toughness}
        />
      )}
    </div>
  );
};