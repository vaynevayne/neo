module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-neo`
  extends: ["neo"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
