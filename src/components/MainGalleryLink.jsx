import { Link } from "react-router-dom";
function GalleryLink() {
  return (
    <div className="items-center justify-center bg-gallery-image bg-cover bg-no-repeat w-full h-96 pt-72">

        <Link to={"/galeria"}>
          <div className="flex w-3/4 items-center justify-center mx-auto border font-semibold border-auburn bg-oldrose hover:bg-opacity-70 text-whitesmoke py-2 px-8">
            Galería
          </div>
        </Link>
      </div>

  );
}

export default GalleryLink;
