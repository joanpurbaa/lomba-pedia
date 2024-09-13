import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { IoCallOutline } from "react-icons/io5";

const UnggahLomba = () => {
  return (
    <>
      <div className="min-h-dvh items-center text-white p-5">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-semibold">
            Lomba pedia
          </Link>
          <Link target="_blank" to="http://wa.me/6282275338090">
            <Button color="default">
              <IoCallOutline className="mr-2 h-5 w-5" />
              Hubungi kami
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default UnggahLomba;
