export type ToolsDataType = {
  "Developer Tools": {
    category: string;
    tools: { name: string; href: string }[];
  }[];
};

export const toolsData: ToolsDataType = {
  "Developer Tools": [
    {
      category: "Converter Tools",
      tools: [
        {
          name: "Number To Words Converter",
          href: "/number-to-words-converter",
        },
        { name: "Color Converter", href: "/color-converter" },
        { name: "Binary Converter", href: "/binary-converter" },
        { name: "Decimal Converter", href: "/decimal-converter" },
        { name: "Base64 Encoder", href: "/base64-encoder" },
        { name: "Base64 Decoder", href: "/base64-decoder" },
        { name: "Morse Converter", href: "/morse-converter" },
        {
          name: "Bits to Bytes Converter",
          href: "/bits-to-bytes-convertor",
        },
        {
          name: "Kilobyte to Megabyte Converter",
          href: "/kilobyte-to-megabyte-converte",
        },
        {
          name: "Gigabyte to Terabyte Converter",
          href: "/gigabyte-to-terabyte-converter",
        },
        { name: "Hex Converter", href: "/hex-converter" },
      ],
    },
    {
      category: "Text Tools",
      tools: [
        { name: "Character Counter", href: "/character-counter" },
        { name: "Case Converter", href: "/case-converter" },
        { name: "Reverse Words", href: "/reverse-words" },
        { name: "Emojis Remover", href: "/emojis-remover" },
        { name: "Reverse Letters", href: "/reverse-letters" },
        { name: "Reverse List", href: "/reverse-list" },
        {
          name: "Duplicate Words Remover",
          href: "/duplicate-words-remover",
        },
        {
          name: "Cursive Text Generator",
          href: "/cursive-text-generator",
        },
        {
          name: "Old English Text Generator",
          href: "/old-english-text-generator",
        },
        {
          name: "Upside Down Text Generator",
          href: "/upside-down-text-generator",
        },
        { name: "List Randomizer", href: "/list-randomizer" },
        { name: "Text Separator", href: "/text-separator" },
        { name: "Text To Speech", href: "/text-to-speech" },
      ],
    },
    {
      category: "Other Calculators",
      tools: [
        { name: "Age Calculator", href: "/age-calculator" },
        {
          name: "Random Number Generator",
          href: "/random-number-calculator",
        },
        {
          name: "Random Password Generator",
          href: "/ramdom-password-gnenerator",
        },
        { name: "Simple Calculator", href: "/Simple-Calculator" },
        { name: "Factor Calculator", href: "/FactorCalculator" },
        { name: "Solar Calculator", href: "/solar-calculator" },
      ],
    },
    {
      category: "SEO (Search Engine Optimization) Tools",
      tools: [
        {
          name: "Schema Markup Generator",
          href: "/seo-tools/schema-markup-generator",
        },
        {
          name: "Unique Words Finder in Related Keywords",
          href: "/seo-tools/unique-words-finder-in-related-kws",
        },
        {
          name: "Robots.txt Generator",
          href: "/seo-tools/robots-txt-generator",
        },
      ],
    },
  ],
};
