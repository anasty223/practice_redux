import { useDispatch, useSelector } from "react-redux/es/exports";
import { getFilter } from "../../redux/selectors";

export default function Filter() {
  const filter = useSelector(getFilter);
  console.log("filter", filter);
  const dispatch = useDispatch();
  return (
    <>
      <label>
        Find contact by name
        <input
          type="text"
          value={filter}
          onChange={(e) => dispatch(e.currentTarget.value)}
        />
      </label>
    </>
  );
}
