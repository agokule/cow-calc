const SpecialPropertiesDisplay = ({ properties }: { properties: string[] }) => {
  // If the array is empty or null, don't render anything.
  if (!properties || properties.length === 0) {
    return null;
  }

  return (
    <div className="special-properties stats-section">
      <ul>
        {properties.map((prop, index) => (
          <li key={index}>{prop}</li>
        ))}
      </ul>
    </div>
  );
};

export default SpecialPropertiesDisplay;
