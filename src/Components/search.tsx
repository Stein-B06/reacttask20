export default function Search() {
  return (
    <form>
      <input
        type="text"
        id="searchInput"
        name="search"
        placeholder="Search..."
      />
      <button id="submit-btn" type="submit">
        Search
      </button>
    </form>
  );
}
