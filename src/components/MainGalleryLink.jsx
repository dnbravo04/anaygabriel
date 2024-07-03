import { Link } from "react-router-dom";
function GalleryLink() {
  return (
    <div className="items-center justify-center bg-gallery-image bg-contain h-96 pt-52">
      <div className="flex items-center justify-center mx-auto">
        <h2 className="font-italianno text-6xl text-whitesmoke">
          Nuestro compromiso
        </h2>
      </div>
      <div className="flex items-center justify-center mx-auto mt-2">
        <Link to={"/anaygabriel/galeria"}>
          <button className="mx-auto border border-oldrose bg-oldrose bg-opacity-50 hover:bg-opacity-100 text-whitesmoke py-2 px-4 rounded ">
            Galería
          </button>
        </Link>
      </div>
    </div>
  );
}

export default GalleryLink;
