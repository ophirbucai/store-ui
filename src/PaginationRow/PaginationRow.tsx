import { Pagination } from "../types";

interface Props extends Pagination {}

export const PaginationRow = (props: Props) => {
  const { userQuery, actions, lastPage, limits } = props;

  return (
    <>
      {userQuery.page > 1 && <button onClick={actions.prev}>Previous</button>}
      <button disabled>
        {userQuery.page}
        {/* <input
          max={lastPage}
          min={1}
          name="page"
          type="number"
          value={userQuery.page}
          onChange={(e) => actions.page(e.target.value)}
        /> */}
      </button>
      {userQuery.page < lastPage && (
        <button onClick={actions.next}>{userQuery.page + 1}</button>
      )}
      <br />
      Limit:
      <select
        value={userQuery.limit}
        onChange={(e) => actions.limit(limits[e.target.selectedIndex])}
      >
        {limits.map((limit) => (
          <option value={limit} key={`limit_${limit}`}>
            {limit}
          </option>
        ))}
      </select>
    </>
  );
};
