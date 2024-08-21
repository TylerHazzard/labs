import { useState } from 'react'
import { FC } from 'react'
import './Votes.css'

interface Props {
    flavors: string[];
  }

const Votes: FC<Props> = ({ flavors }) => {
    const [votes, setVotes] = useState<Record<string, number>>(
        flavors.reduce((acc, flavor) => ({ ...acc, [flavor]: 0 }), {})
      )
    
      const totalVotes = Object.values(votes).reduce((a, b) => a + b, 0)
    
      const handleVote = (flavor: string) => {
        setVotes((prevVotes) => ({ ...prevVotes, [flavor]: prevVotes[flavor] + 1 }));
      }
      return (
        <>
            <div className="votes">
            {flavors.map((flavor) => {
                const count = votes[flavor]
                const percentage = totalVotes ? (count / totalVotes) * 100 : 0;
                return (
                <div key={flavor} className="flavor">
                    <span>{flavor}</span>
                    <div className="graph-bar" style={{ width: `${percentage}%` }}></div>
                    <div className="info">
                    <span>{count} votes</span>
                    <span>({percentage.toFixed(1)}%)</span>
                    </div>
                    <button onClick={() => handleVote(flavor)}>Vote for {flavor}</button>
                </div>
                );
            })}
            {totalVotes === 0 && <p>No votes yet.</p>}
            </div>
        </>
      )
    }

export default Votes