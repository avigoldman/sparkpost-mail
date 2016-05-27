// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by sparkpost-mail.js.
import { name as packageName } from "meteor/sparkpost-mail";

// Write your tests here!
// Here is an example.
Tinytest.add('sparkpost-mail - example', function (test) {
  test.equal(packageName, "sparkpost-mail");
});
