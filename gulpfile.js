var gulp = require('gulp');


require('./gulp/tasks/build-js')();
require('./gulp/tasks/build-css')();
require('./gulp/tasks/copy-assets')();

require('./gulp/tasks/run')();
require('./gulp/tasks/watch')();