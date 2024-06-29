const core = require('@actions/core');

try {
  console.log(`Hello!`);
} catch (error) {
  core.setFailed(error.message);
}
