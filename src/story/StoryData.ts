export interface Vocabulary {
  english: string;
  chinese: string;
  pinyin: string;
}

export interface StoryNode {
  id: string;
  text: string;
  choices: StoryNode[];
  imageUrl: string;
  vocabulary?: Vocabulary;
}

// Local Images (mapped to public/ folder)
// We use import.meta.env.BASE_URL to ensure the path is correct when deployed to GitHub Pages (which uses a subdirectory)
const IMG_CAT = import.meta.env.BASE_URL + "KittenChina.jpg";         // Paws in China
const IMG_SQUIRREL = import.meta.env.BASE_URL + "SquirrelCalifornia.jpg"; // Nutty in California
const IMG_SUNSET = import.meta.env.BASE_URL + "SunriseSunsetMaui.jpg";     // Maui Arrival
const IMG_TURTLE = import.meta.env.BASE_URL + "SeaTurtleMaui.jpg";     // Sea Turtle Meeting

// 4. Endings
const endingBest: StoryNode = {
  id: "ending_best",
  text: "They go to the ocean to visit the wise Sea Turtle. 'Aloha!' says the turtle. Paws and Nutty are so happy to be together in Hawaii. The End.",
  choices: [],
  imageUrl: IMG_TURTLE,
  vocabulary: {
    english: "Sea Turtle",
    chinese: "海龟",
    pinyin: "hǎi guī"
  }
};

const endingRelax: StoryNode = {
  id: "ending_relax",
  text: "They decide to just relax on the beach and watch the sunset. It's beautiful, but they miss meeting the turtle. The End.",
  choices: [],
  imageUrl: IMG_SUNSET,
  vocabulary: {
    english: "Sunset",
    chinese: "日落",
    pinyin: "rì luò"
  }
};

const endingStayHome: StoryNode = {
  id: "ending_stay_home",
  text: "Paws decides to stay in China and nap. Maybe next time!",
  choices: [],
  imageUrl: IMG_CAT,
  vocabulary: {
    english: "Cat",
    chinese: "猫",
    pinyin: "māo"
  }
};

// 3. Maui Nodes
const nodeMaui: StoryNode = {
  id: "node_maui",
  text: "They meet in Maui! The sunset over the ocean is breathtaking. 'Where is our friend the Sea Turtle?' asks Nutty.",
  choices: [endingBest, endingRelax],
  imageUrl: IMG_SUNSET,
  vocabulary: {
    english: "Sunset",
    chinese: "日落",
    pinyin: "rì luò"
  }
};

// 2. California Node
const nodeCalifornia: StoryNode = {
  id: "node_california",
  text: "Nutty the Squirrel answers the phone in sunny California! 'I would love to go to Maui!' he chirps. 'I'll pack my acorns!'",
  choices: [nodeMaui],
  imageUrl: IMG_SQUIRREL,
  vocabulary: {
    english: "Squirrel",
    chinese: "松鼠",
    pinyin: "sōng shǔ"
  }
};

// 1. Root Node (China)
export const rootNode: StoryNode = {
  id: "root",
  text: "Paws the Cat is hanging out in China. He misses his best friend Nutty. 'I should call him,' Paws thinks.",
  choices: [nodeCalifornia, endingStayHome],
  imageUrl: IMG_CAT,
  vocabulary: {
    english: "Cat",
    chinese: "猫",
    pinyin: "māo"
  }
};
