/// <reference types="cypress" />

describe('baseUrl test home findex', () => {
    beforeEach(() => {
      cy.visit("/");
    })
    it('Display Home and verify nav is displayed ', () => {
        cy.get("header").should("be.visible");
    })
    it("Should display getVehicle button",() => {
      cy.get("#getVehicle").should("be.visible");
    })
  
    it("should display appVehicle if new Vehicle is generated", () => {
      cy.get("#getVehicle").click();
      cy.get("app-vehicle").should("be.visible");
    })
    
    it("when load is click. it should load the vehicle in terminal", () => {
      cy.get("#getVehicle").click();
      cy.get("#vehicleCategory").then((d) => {
        const categorySize = d[0].innerText;
        cy.get("#loadVehicle").click();
        if (categorySize === 'Small') {
          cy.get("#tableSmallRow").should("have.length.above", 0);
          cy.get("#deleteAllSmall").click();
        } else {
          cy.get("#tableLargeRow").should("have.length.above", 0);
          cy.get("#deleteAllLarge").click();
        }
      })
    })
    it("should delete specific category when user click delete all in category", () => {
      cy.get("#getVehicle").click();
      cy.get("#vehicleCategory").then((d) => {
        const categorySize = d[0].innerText;

        if (categorySize === 'Small') {
          cy.get("#deleteAllSmall").click();
          cy.get("#tableSmallRow").should("have.length", 0);
        } else {
          cy.get("#deleteAllLarge").click();
          cy.get("#tableLargeRow").should("have.length", 0);
        }
      })
    })
  })