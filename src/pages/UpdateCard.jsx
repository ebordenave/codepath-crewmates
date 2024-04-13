import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import supabase from "../config/CreateClient.jsx";

import { Form } from "../components/Form/Form.jsx";

export const UpdateCard = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [card_title, setCardTitle] = useState("");
  const [converted_mana_cost, setConvertedManaCost] = useState("");
  const [abilities_text, setAbilitiesText] = useState("");
  const [flavor_text, setFlavorText] = useState("");
  const [card_type, setCardType] = useState("");
  const [card_power, setCardPower] = useState("");
  const [card_toughness, setCardToughness] = useState("");
  const [card_subtype, setCardSubType] = useState("");
  const [form_error, setFormError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !card_title ||
      !converted_mana_cost ||
      !abilities_text ||
      !flavor_text ||
      !card_type ||
      !card_toughness ||
      !card_power ||
      !card_subtype
    ) {
      setFormError("Please fill in all fields correctly.");
      return;
    }

    const { data, error } = await supabase
      .from("cards")
      .update({
        card_title,
        converted_mana_cost,
        abilities_text,
        flavor_text,
        card_type,
        card_power,
        card_toughness,
        card_subtype,
      })
      .eq("id", id)
      .select();

    if (error) {
      setFormError("Error Here");
      console.log(error);
    }

    if (data) {
      console.log(data);
      setFormError(null);
      navigate("/");
    }
  };

  useEffect(() => {
    const fetchCard = async () => {
      const { data, error } = await supabase
        .from("cards")
        .select()
        .eq("id", id)
        .single();

      if (error) {
        navigate("/", { replace: true });
      }

      if (data) {
        setCardTitle(data.card_title);
        setConvertedManaCost(data.converted_mana_cost);
        setAbilitiesText(data.abilities_text);
        setFlavorText(data.flavor_text);
        setCardType(data.card_type);
        setCardPower(data.card_power);
        setCardToughness(data.card_toughness);
        setCardSubType(data.card_subtype);
        console.log(data);
      }
    };
    fetchCard();
  }, [id, navigate]);

  return (
    <div className="page-wrapper">
      <h2>Update Card</h2>
      <Form
        handleSubmit={handleSubmit}
        card_type={card_type}
        card_subtype={card_subtype}
        card_title={card_title}
        card_toughness={card_toughness}
        card_power={card_power}
        converted_mana_cost={converted_mana_cost}
        abilities_text={abilities_text}
        flavor_text={flavor_text}
        setCardTitle={setCardTitle}
        setCardPower={setCardPower}
        setAbilitiesText={setAbilitiesText}
        setCardType={setCardType}
        setConvertedManaCost={setConvertedManaCost}
        setFlavorText={setFlavorText}
        setCardToughness={setCardToughness}
        setCardSubType={setCardSubType}
      />
    </div>
  );
};