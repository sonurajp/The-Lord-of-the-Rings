import { limit } from "../assets/Utils/constant";

const PageLimit = ({ setLimit }) => {
  return (
    <>
      <label className="dropdown">Limit:</label>
      <select
        className="dropdown"
        name="dropdown"
        onChange={(e) => setLimit(e.target.value)}
      >
        {limit?.map((data) => (
          <option value={data?.value} key={data?.value}>
            {data?.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default PageLimit;
