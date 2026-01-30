import type { StoryNode } from './StoryData';

export function getMiniMaxScore(node: StoryNode): number {
    // Heuristic: Score based on keywords in the text indicating how "complete" the journey is.
    const text = node.text;
    
    // The goal is to meet the Sea Turtle in Maui!
    if (text.includes("Sea Turtle") || text.includes("Aloha")) {
        return 20; // Best ending
    }
    
    if (text.includes("Maui") || text.includes("sunset")) {
        return 10; // Good progress
    }
    
    return 0;
}

export function minimax(node: StoryNode, depth: number, isMaximizing: boolean): number {
    if (node.choices.length === 0) {
        return getMiniMaxScore(node);
    }

    if (isMaximizing) {
        let bestScore = -Infinity;
        for (const child of node.choices) {
            const score = minimax(child, depth + 1, false);
            bestScore = Math.max(bestScore, score);
        }
        return bestScore;
    } else {
        // "Fate" / Minimizing player
        let bestScore = Infinity;
        for (const child of node.choices) {
            const score = minimax(child, depth + 1, true);
            bestScore = Math.min(bestScore, score);
        }
        return bestScore;
    }
}

export function getBestChoiceIndex(node: StoryNode): number {
    let bestScore = -Infinity;
    let choiceIndex = 0;

    node.choices.forEach((child, index) => {
        const score = minimax(child, 0, false);
        if (score > bestScore) {
            bestScore = score;
            choiceIndex = index;
        }
    });

    return choiceIndex;
}
