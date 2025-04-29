interface CardItemProps {
  title: string;
  img: string;
  onClick?: () => void;
}

const CardItem = ({ title, img, onClick }: CardItemProps) => {
  return (
    <div
      onClick={onClick}
      className="w-80 cursor-pointer bg-white border rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
    >
      <img
        src={img}
        alt={title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4 flex-grow flex items-center justify-center text-center">
      <p className="text-lg font-medium leading-tight line-clamp-2">
        {title}
      </p>
      </div>
    </div>
  );
};

export default CardItem;

