export {};

// Example 1
interface Dictionary {
  [key: string]: string;
}

const greetings: Dictionary = {
  en: "Hello",
  fr: "Bonjour",
};

// Example 2: error
// greetings.es = 123; ❌

// Example 3: flexible values
interface MixedDict {
  [key: string]: string | number;
}

const scores: MixedDict = {
  math: 90,
  science: 85,
};

// Example 4
console.log(scores);