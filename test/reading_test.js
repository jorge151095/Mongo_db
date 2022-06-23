const assert = require("assert");
const User = require("../src/user");

describe("Reading users out of the database", () => {
  let joe;

  beforeEach((done) => {
    joe = new User({ name: "Joe" });
    joe.save().then(() => done());
  });

  it("Finds all users with name of Joe", (done) => {
    User.find({ name: "Joe" }).then((users) => {
      assert(joe._id.toString() === users[0]._id.toString());
      done();
    });
  });

  it("Finds user with name of Joe", (done) => {
    User.findOne({ id: joe._id }).then((user) => {
      assert(joe.name === user.name);
      done();
    });
  });
});
