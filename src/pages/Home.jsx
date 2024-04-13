import { MtgCard } from "../components/MtgCard/MtgCard.jsx";
import { useEffect, useState } from "react";
import supabase from "../config/CreateClient.jsx";

export const Home = () => {
  const [fetchError, setFetchError] = useState(null);
  const [cards, setCards] = useState(null);

  const handleDelete = (id) => {
    setCards((prevCards) => {
      return prevCards.filter((c) => c.id !== id);
    });
  };

  useEffect(() => {
    const fetchCards = async () => {
      const { data, error } = await supabase.from("cards").select();

      if (error) {
        setFetchError("Could not fetch cards");
        setCards(null);
        console.log(error);
      }

      if (data) {
        setCards(data);
        setFetchError(null);
        console.log(data);
      }
    };
    fetchCards();
  }, []);

  return (
    <>
      <div className="page-wrapper">
        <h2>Magic: The Gathering Custom Card Maker</h2>
        <h4>CodePath Crewmates Project</h4>
        {fetchError && <p>{fetchError}</p>}
        {cards && (
          <div className="cards">
            <div className="card-grid">
              {cards.map((card) => (
                <MtgCard key={card.id} card={card} onDelete={handleDelete} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};