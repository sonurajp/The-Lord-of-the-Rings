const PageLimit = ({ setLimit }) => {
  const limit = [
    { label: 10, value: 10 },
    { label: 20, value: 20 },
    { label: 50, value: 50 },
  ];
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
