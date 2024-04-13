import "./Form.css";
import { Button } from "../Button/Button.jsx";

export const Form = ({
  handleSubmit,
  card_title,
  setCardTitle,
  converted_mana_cost,
  setConvertedManaCost,
  abilities_text,
  setAbilitiesText,
  flavor_text,
  setFlavorText,
  card_type,
  setCardType,
  card_power,
  setCardPower,
  card_toughness,
  setCardToughness,
  form_error,
  setCardSubType,
  card_subtype,
}) => {
  const handleCardTypeOnChange = (e) => {
    setCardType(e.target.value);
  };

  const handleCardSubTypeOnChange = (e) => {
    setCardSubType(e.target.value);
  };

  const handleReset = () => {
    setCardType("");
    setCardSubType("");
    setCardPower("");
    setCardTitle("");
    setFlavorText("");
    setAbilitiesText("");
    setCardToughness("");
    setConvertedManaCost("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor={card_title}>Card Title:</label>
        <input
          type="text"
          id="title"
          value={card_title}
          onChange={(e) => setCardTitle(e.target.value)}
        />

        {/* Set Converted Mana Cost Here */}
        <label htmlFor={converted_mana_cost}>Mana Cost:</label>
        <input
          type="text"
          id="converted_mana_cost"
          value={converted_mana_cost}
          onChange={(e) => setConvertedManaCost(e.target.value)}
        />

        {/* Set Abilities Text Here */}
        <label htmlFor={abilities_text}>Abilities:</label>
        <textarea
          id="abilities_text"
          value={abilities_text}
          rows="4"
          cols="50"
          wrap="hard"
          onChange={(e) => setAbilitiesText(e.target.value)}
        />

        {/* Set Flavor Text Here */}
        <label htmlFor={flavor_text}>Flavor Text:</label>
        <textarea
          maxLength="50"
          rows="4"
          cols="50"
          wrap="hard"
          id="flavor_text"
          value={flavor_text}
          onChange={(e) => setFlavorText(e.target.value)}
        />
        {/* Set Card Type Here */}
        <div>
          <label htmlFor={card_type}>Card Type:</label>
          <select
            name="cards"
            id="card_type"
            value={card_type}
            onChange={handleCardTypeOnChange}
          >
            <option>Artifact</option>
            <option>Creature</option>
            <option>Legendary Creature</option>
            <option>Enchantment</option>
            <option>Land</option>
            <option>Instant</option>
            <option>Sorcery</option>
          </select>
        </div>
        {/* Set Card SubType Here */}
        <div>
          <label htmlFor={card_subtype}>Card Sub-Type:</label>
          <select
            name="cards"
            id="card_type"
            value={card_subtype}
            onChange={handleCardSubTypeOnChange}
          >
            <option>Human</option>
            <option>Elf</option>
            <option>Merfolk</option>
            <option>Faerie</option>
            <option>Cleric</option>
            <option>Warrior</option>
            <option>Rogue</option>
            <option>Ninja</option>
            <option>Sponge</option>
            <option>Beeble</option>
            <option>Cave</option>
            <option>Desert</option>
            <option>Gate</option>
            <option>Lair</option>
            <option>Locus</option>
            <option>Urzas (Mine, Power-Plant, and Tower)</option>
            <option>Adventure</option>
            <option>Arcane</option>
            <option>Lesson</option>
            <option>Trap</option>
            <option>Clue</option>
            <option>Equipment</option>
            <option>Food</option>
            <option>Gold</option>
            <option>Treasure</option>
            <option>Vehicle</option>
            <option>Contraption</option>
            <option>Fortification</option>
            <option>Aura</option>
            <option>Cartouche</option>
            <option>Curse</option>
            <option>Rune</option>
            <option>Shrine</option>
            <option>Siege</option>
          </select>
        </div>
        {/* Set Card Type Here */}

        <div>
          <label htmlFor={card_toughness}>Toughness:</label>
          <input
            type="number"
            id="power"
            value={card_toughness}
            onChange={(e) => setCardToughness(e.target.value)}
            name="toughness"
            min="0"
            max="99"
          />
        </div>
        <div>
          <label htmlFor={card_power}>Power:</label>
          <input
            type="number"
            id="power"
            value={card_power}
            onChange={(e) => setCardPower(e.target.value)}
            name="power"
            min="0"
            max="99"
          />
        </div>

        {/* Set Card Type Here */}
        <div className="button-wrapper">
          <div className="button-container">
            <Button
              backgroundColor="orangered"
              buttonText="Submit"
              color="#fff"
              onCLick={handleSubmit}
            />
          </div>
          <div>
            <Button
              backgroundColor="#FAFBFC"
              buttonText="Reset"
              color="black"
              onCLick={handleReset}
            />
          </div>
        </div>
        {/* <button style={{ backgroundColor: "orangered" }}>Create Card</button> */}
        {form_error && <p className="error">{form_error}</p>}
      </form>
    </>
  );
};