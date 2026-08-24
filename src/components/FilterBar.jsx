export default function FilterBar({ activeFilter, onFilterChange }) {
  const filters = [
    {
      id: "beginner",
      label: "Beginner",
    },
    {
      id: "advanced",
      label: "Advanced",
    },
  ];

  return (
    <div className="filter-bar">
      {filters.map((filter) => (
        <button
          key={filter.id}
          type="button"
          className={`filter-button ${
            activeFilter === filter.id ? "active" : ""
          }`}
          onClick={() => onFilterChange(filter.id)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}