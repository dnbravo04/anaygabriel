import goldBorder from "../img/gold-border-with-roses.png";
import Roses from "../img/roses.png";
export default function MainPhrase() {
  return (
    <div className="relative items-center justify-center bg-gold-border-with-roses bg-contain">
      <img
        className="bg-cover invisible object-cover"
        src={goldBorder}
        alt=""
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="px-8 text-center font-handlee text-5xl text-oldrose">"Juntos, escribimos nuestro propio cuento de hadas"</p>
      </div>
    </div>
  );
}
