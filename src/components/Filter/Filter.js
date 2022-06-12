import { useDispatch, useSelector } from "react-redux/es/exports";
import { getFilter } from "../../redux/selectors";
import { changeFilter } from "../../redux/filterSlice";

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
          onChange={(e) => dispatch(changeFilter(e.currentTarget.value))}
        />
      </label>
    </>
  );
}
