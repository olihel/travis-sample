travis-sample
=============

Playing with [Travis-CI](https://travis-ci.org)

[![Build Status](https://travis-ci.org/olihel/travis-sample.svg?branch=master)](https://travis-ci.org/olihel/travis-sample)

### This project

This is an example project for demonstrating Travis CI: a dummy npm module returning a test value. The module code is found in the `lib/index.js` file.

A simple unit test is verifying the return value of the module and is located in the `test/` folder. The unit test is started via the Grunt task `grunt nodeunit` (see [nodeunit](https://github.com/caolan/nodeunit) / [grunt-contrib-nodeunit](https://github.com/gruntjs/grunt-contrib-nodeunit)).

All JavaScript files in this project are linted by jshint via the Grunt task `grunt jshint` (see [jshint](http://www.jshint.com) / [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint)). Linting rules are defined in the `.jshintrc` file in the project root.

Clone this project and run `npm install` to install all node dependencies. Run `npm test` for starting unit tests and the linting task locally.

### Travis CI

Travis CI is a hosted continuous integration service. Its integration with GitHub via webhooks allows you to automatically test your project against one or more versions of languages, in this case different versions of nodejs.

After activating the Travis CI webhook in your GitHub project, you just need to add the config file `.travis.yml` for Travis CI to know what to do, e.g.:

```YAML
language: node_js
node_js:
  - "0.10"
  - "0.11"
before_script:
  - npm install
  - npm install -g grunt-cli
matrix:
  fast_finish: true
  allow_failures:
    - node_js: "0.11"
notifications:
  email:
    on_success: change
    on_failure: always
```

Please see the Travic CI [Getting Started Guide](http://docs.travis-ci.com/user/getting-started/) for more details.

From now on, each time you push changes to the GitHub repository or someone opens a pull request, Travis CI will start your project's tests in a build environment that you have defined and sends notifications on success or failure:

![Travis CI success notification](https://raw.github.com/olihel/travis-sample/master/doc/images/01-email.jpg "Travis CI success notification")

On the project's Travis CI [status page](https://travis-ci.org/olihel/travis-sample) you can see all build results incl. logs, e.g:

![Travis CI log](https://raw.github.com/olihel/travis-sample/master/doc/images/02-log.jpg "Travis CI log")

If someone's pull request breaks the tests, you even get warned right in the GitHub pull request discussion thread:

![Travis CI warning](https://raw.github.com/olihel/travis-sample/master/doc/images/03-warning.jpg "Travis CI warning")