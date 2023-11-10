const themeDir = __dirname + "/../../";

module.exports = {
  content: [
    themeDir + "layouts/**/*.html",
    themeDir + "content/**/*.html",
    "layouts/**/*.html",
    "config.toml",
    "hugo.toml",
    "content/**/*.html",
    "assets/js/search.js",
    "exampleSite/layouts/**/*.html",
    "exampleSite/config.toml",
    "exampleSite/content/**/*.html",
  ],
  darkMode: "class",
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: [
            {
              "code::before": {
                content: '""',
              },
              "code::after": {
                content: '""',
              },
            },
          ],
        },
        dark: {
          css: [
            {
              color: theme("colors.gray.400"),
              '[class~="lead"]': {
                color: theme("colors.gray.300"),
              },
              body: {
                borderColor: theme("colors.teal.400"),
              },
              a: {
                color: theme("colors.white"),
              },
              strong: {
                color: theme("colors.white"),
              },
              "ol > li::before": {
                color: theme("colors.gray.400"),
              },
              "ul > li::before": {
                backgroundColor: theme("colors.gray.600"),
              },
              hr: {
                borderColor: theme("colors.gray.200"),
              },
              blockquote: {
                color: theme("colors.gray.200"),
                borderLeftColor: theme("colors.gray.600"),
              },
              h1: {
                color: theme("colors.teal.400"),
              },
              h2: {
                color: theme("colors.teal.400"),
              },
              h3: {
                color: theme("colors.teal.400"),
              },
              h4: {
                color: theme("colors.teal.400"),
              },
              "figure figcaption": {
                color: theme("colors.gray.400"),
              },
              code: {
                color: theme("colors.white"),
              },
              "a code": {
                color: theme("colors.white"),
              },
              "code::before": {
                content: '""',
              },
              "code::after": {
                content: '""',
              },
              pre: {
                color: theme("colors.gray.200"),
                backgroundColor: theme("colors.gray.800"),
              },
              thead: {
                color: theme("colors.white"),
                borderBottomColor: theme("colors.gray.400"),
              },
              "tbody tr": {
                borderBottomColor: theme("colors.gray.600"),
              },
            },
          ],
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ["dark"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
