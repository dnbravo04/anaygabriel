import goldBorder from "../img/gold-border-with-roses.png";
export default function MainPhrase() {
  return (
    <div className="relative items-center justify-center bg-gold-border-with-roses bg-contain">
      <img
        className="bg-cover invisible object-cover"
        src={goldBorder}
        alt=""
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="px-8 text-center font-handlee text-4xl text-oldrose">"En un beso, sabrás todo lo que he callado"</p>
      </div>
    </div>
  );
}
