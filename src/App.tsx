import { useState } from 'react';
import './App.css';
import { rootNode } from './story/StoryData';
import type { StoryNode } from './story/StoryData';
import { getBestChoiceIndex } from './story/MiniMax';

function App() {
  const [currentNode, setCurrentNode] = useState<StoryNode>(rootNode);
  const [history, setHistory] = useState<StoryNode[]>([]);

  const handleChoice = (index: number) => {
    const nextNode = currentNode.choices[index];
    setHistory([...history, currentNode]);
    setCurrentNode(nextNode);
  };

  const handleRestart = () => {
    setCurrentNode(rootNode);
    setHistory([]);
  };

  const bestChoiceIndex = currentNode.choices.length > 0 ? getBestChoiceIndex(currentNode) : -1;

  return (
    <div className="story-container">
      <header className="story-header">
        <h1>Nutty & Paws' World Tour 🐿️🐱</h1>
      </header>

      <div className="story-card">
        <div className="image-frame">
          <img 
            src={currentNode.imageUrl} 
            alt="Story Scene" 
            className="story-image"
          />
          {currentNode.vocabulary && (
            <div className="vocabulary-card">
              <div className="vocab-chinese">{currentNode.vocabulary.chinese}</div>
              <div className="vocab-pinyin">{currentNode.vocabulary.pinyin}</div>
              <div className="vocab-english">{currentNode.vocabulary.english}</div>
            </div>
          )}
        </div>
        
        <p className="story-text">{currentNode.text}</p>

        {currentNode.choices.length > 0 ? (
          <div className="choices-container">
            <h3>What should they do?</h3>
            {currentNode.choices.map((choice, index) => (
              <button 
                key={index}
                onClick={() => handleChoice(index)}
                className={`choice-button ${index === bestChoiceIndex ? 'recommended' : ''}`}
              >
                {choice.text.split('.')[0]}...
                {index === bestChoiceIndex && <span className="badge">MiniMax Pick!</span>}
              </button>
            ))}
          </div>
        ) : (
          <div className="ending-container">
            <h2>The End</h2>
            <button onClick={handleRestart} className="restart-button">Start Again</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
