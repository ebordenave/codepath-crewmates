// import {useParams} from "react-router-dom";
// import {useState} from "react";
import supabase from "../config/CreateClient.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Form } from "../components/Form/Form.jsx";

export const Create = () => {
  const navigate = useNavigate();

  const [card_title, setCardTitle] = useState("");
  const [converted_mana_cost, setConvertedManaCost] = useState("");
  const [abilities_text, setAbilitiesText] = useState("");
  const [flavor_text, setFlavorText] = useState("");
  const [card_type, setCardType] = useState("");
  const [card_power, setCardPower] = useState("");
  const [card_toughness, setCardToughness] = useState("");
  const [card_subtype, setCardSubType] = useState("");
  const [form_error, setFormError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check
    console.log(
      card_title,
      converted_mana_cost,
      abilities_text,
      flavor_text,
      card_type,
      card_power,
      card_toughness,
      card_subtype,
    );

    const { data, error } = await supabase
      .from("cards")
      .insert([
        {
          card_title,
          converted_mana_cost,
          abilities_text,
          flavor_text,
          card_type,
          card_toughness,
          card_power,
          card_subtype,
        },
      ])
      .select();

    if (error) {
      console.log("‼️" + error);
      setFormError("Please fill in all fields");
    }

    if (data) {
      console.log("🎉" + data);
      setFormError(null);
      navigate("/");
    }
  };

  return (
    <>
      <div className="page-wrapper">
        <h2>Create</h2>
        <Form
          handleSubmit={handleSubmit}
          card_type={card_type}
          card_title={card_title}
          card_toughness={card_toughness}
          card_power={card_power}
          card_subtype={card_subtype}
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
    </>
  );
};