import goldBorder from "../img/gold-border-with-roses.png";
export default function MainPhrase() {
  return (
    <div className="relative items-center justify-center bg-contain">
      <img
        className="bg-cover object-cover"
        src={goldBorder}
        alt=""
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="px-12 text-center font-handlee text-4xl text-oldrose">"El amor es el hechizo que transforma lo ordinario en extraordinario"</p>
      </div>
    </div>
  );
}
