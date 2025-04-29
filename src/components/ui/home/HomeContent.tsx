import CardItem from "@/components/ui/home/CardItem";
import { useNavigate } from 'react-router-dom';
import { homeCards as cards } from "@/components/ui/home/HomeCards";


interface Card {
  title: string;
  img: string;
  path: string;
}

const HomeContent = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full bg-white px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-10">Bienvenidos a CET</h1>

      {/* Primera fila: 2 cards centradas */}
      <div className="flex flex-wrap justify-center gap-6 mb-8">
        {cards.slice(0, 2).map((card: Card, index: number) => (
          <CardItem
            key={index}
            title={card.title}
            img={card.img}
            onClick={() => navigate(card.path)}
          />
        ))}
      </div>

      {/* Segunda fila: 3 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-6 max-w-6xl mx-auto">
        {cards.slice(2).map((card: Card, index: number) => (
          <CardItem
            key={index + 2}
            title={card.title}
            img={card.img}
            onClick={() => navigate(card.path)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeContent;
