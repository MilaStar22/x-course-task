module.exports = {
  testRegex: ".*\\.spec\\.js$",
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  moduleFileExtensions: [
    "js",
    "jsx",
    "json"
  ],
  moduleDirectories: [
    "node_modules",
    "src",
    "assets"
  ],
  verbose: true,
  bail: true,
}
