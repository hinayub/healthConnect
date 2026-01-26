import { Link } from "react-router-dom";

const LinkButton = ({ page }) => {
  return (
    <div className="mt-10 mb-5 flex justify-end">
      <Link
        to={page}
        className="next-btn bg-blue-600 flex justify-center items-center hover:bg-blue-700 text-white rounded-lg"
      >
        Next
      </Link>
    </div>
  );
};

export default LinkButton;
