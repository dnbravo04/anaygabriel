function MainSection() {
  return (
    <div className="bg-header-image bg-contain">
      <div className="flex items-center justify-center">
        <h1 className="text-6xl text-whitesmoke font-medium pt-10 font-italianno">
          Ana y Gabriel
        </h1>
      </div>
      <h2 className="text-base text-whitesmoke font-bold font-handlee flex items-center justify-center mx-auto pt-2">
        10.01.2025
      </h2>
      <div className="pb-1">

        <button className="flex w-3/4 items-center justify-center mx-auto border text-whitesmoke mt-32 mb-5 border-auburn bg-oldrose bg-opacity-50 hover:bg-opacity-70 text-whitesmoke py-2 px-8">
          Responde a la invitación
        </button>
      </div>

    </div>
  );
}

export default MainSection;
