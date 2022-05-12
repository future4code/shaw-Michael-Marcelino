import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import { BASE_URL } from "../Constants/urls";

export function Trash() {
  const deleteMatches = () => {
    axios
      .put(`${BASE_URL}clear`)
      .then((res) => {
        alert(
          "Deslikes efetuados com sucesso, pode continuar a clicar a vontade!!"
        );
      })
      .cath((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <div className="trash">
      <button onClick={deleteMatches}>
            Apagar Matches
        <FaTrashAlt className="trash-btn"  />
      </button>
    </div>
  );
}
