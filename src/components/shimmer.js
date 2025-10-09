const Shimmer= ()=> {
    return (
        <div className="rest-container">
      {Array(8).fill("").map((_, i) => (
        <div className="shimmer-card" key={i}></div>
      ))}
    </div>
    )
}

export default Shimmer;