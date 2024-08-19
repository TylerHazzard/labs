import { useState } from 'react'
import "./App.css"

const initialVotes: Record<string, number> = {
  Vanilla: 0,
  Chocolate: 0,
  Strawberry: 0
};

const Votes = () => {
  const [votes, setVotes] = useState(initialVotes);

  const handleVote = (flavor: string) => {
    setVotes(prevVotes => ({
      ...prevVotes,
      [flavor]: prevVotes[flavor] + 1
    }));
  };

  const totalVotes = Object.values(votes).reduce((sum, count) => sum + count, 0);

  return (
    <div className="votes">
      <h2>Vote for Your Favorite Flavor!</h2>
      <div className="vote-buttons">
        {Object.keys(votes).map(flavor => (
          <button key={flavor} onClick={() => handleVote(flavor)}>
            {flavor}
          </button>
        ))}
      </div>
      <div className="results">
        {totalVotes === 0 ? (
          <p>No votes yet.</p>
        ) : (
          Object.entries(votes).map(([flavor, count]) => {
            if (count === 0) return null;
            const percentage = (count / totalVotes) * 100;
            return (
              <div key={flavor} className="result">
                <div className="flavor">{flavor}</div>
                <div className="bar" style={{ width: `${percentage}%` }}></div>
                <div className="count">{count} ({percentage.toFixed(1)}%)</div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Votes;