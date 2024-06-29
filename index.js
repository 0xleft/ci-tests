const core = require('@actions/core');

try {
  console.log(`Hello! test`);
} catch (error) {
  core.setFailed(error.message);
}
