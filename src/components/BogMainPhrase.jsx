import greenBorder from "../img/green-border.png";
export default function BogMainPhrase() {
  return (
    <div className="relative items-center justify-center bg-green-border bg-contain">
      <img
        className="bg-cover object-cover"
        src={greenBorder}
        alt=""
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="px-16 text-center font-handlee text-4xl text-mossgreen">"El amor es el hechizo que transforma lo ordinario en extraordinario"</p>
      </div>
    </div>
  );
}
