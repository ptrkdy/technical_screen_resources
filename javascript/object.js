#!/usr/bin/env node

// ----------------------------------------------------------------------------
// Imports
// ----------------------------------------------------------------------------


// ----------------------------------------------------------------------------
// Class definition
// ----------------------------------------------------------------------------

class CarInsurancePolicy {
    constructor(policyNumber, holderName, carMake, carModel, carYear, coverageType, basePremium) {
        this.policyNumber = policyNumber;
        this.holderName = holderName;
        this.carMake = carMake;
        this.carModel = carModel;
        this.carYear = carYear;
        this.coverageType = coverageType;
        this.basePremium = basePremium;
        this.isActive = true;
    }

    getPolicy() {
        // repair this code
        return;
    }

    updatePolicy({ holderName = null, carMake = null, carModel = null, carYear = null, coverageType = null } = {}) {
        if (holderName) {
            this.holderName = holderName;
        }
        if (carMake) {
            this.carMake = carMake;
        }
        if (carModel) {
            this.carModel = carModel;
        }
        if (carYear) {
            this.carYear = carYear;
        }
        if (coverageType) {
            this.coverageType = coverageType;
        }
    }

    calculatePremium() {
        const currentYear = new Date().getFullYear();
        const ageOfCar = currentYear - this.carYear;
        let premiumMultiplier = 1.0;

        if (ageOfCar > 5) {
            premiumMultiplier += 0.1;
        }
        if (this.coverageType === 'comprehensive') {
            premiumMultiplier += 0.2;
        }

        return this.basePremium * premiumMultiplier;
    }

    deactivatePolicy() {
        this.isActive = false;
    }

    toString() {
        return (
            `Policy Number: ${this.policyNumber}\n` +
            `Holder Name: ${this.holderName}\n` +
            `Car: ${this.carMake} ${this.carModel} (${this.carYear})\n` +
            `Coverage Type: ${this.coverageType}\n` +
            `Base Premium: $${this.basePremium.toFixed(2)}\n` +
            `Active: ${this.isActive}`
        );
    }
}

// ----------------------------------------------------------------------------
// Exercise
// ----------------------------------------------------------------------------

// 1) Initialize the object

// 2) Preview the object

// 3) Update the object

// 4) Return the object

// 5) Write a test for the object

// ----------------------------------------------------------------------------
// EOF
// ----------------------------------------------------------------------------
