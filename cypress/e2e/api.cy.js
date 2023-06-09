import userUpdate from "../fixtures/userUpdate.json";

describe("api tests for users", () => {
  it("create user", () => {
    cy.createUser("user").then((result) => {
      expect(result.status).is.equal(200);
    });
  });

  it("edit user", () => {
    cy.createUser("user");
    cy.request({
      url: `/user/${userUpdate.username}`,
      body: userUpdate,
      method: "PUT",
    }).then((result) => {
      expect(result.status).is.equal(200);
    });
  });

  it("delete user", () => {
    cy.createUser("userUpdate");
    cy.request({
      url: `/user/${userUpdate.username}`,
      body: userUpdate,
      method: "DELETE",
    }).then((result) => {
      expect(result.status).is.equal(200);
      expect(result.body.message).is.equal(`${userUpdate.username}`);
    });
  });
});