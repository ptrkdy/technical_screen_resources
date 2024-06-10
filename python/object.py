#!/usr/bin/env python3

# ----------------------------------------------------------------------------
# Imports
# ----------------------------------------------------------------------------


# ----------------------------------------------------------------------------
# Class definition
# ----------------------------------------------------------------------------

class CarInsurancePolicy:
    def __init__(self, policy_number, holder_name, car_make, car_model, car_year, coverage_type, base_premium):
        self.policy_number = policy_number
        self.holder_name = holder_name
        self.car_make = car_make
        self.car_model = car_model
        self.car_year = car_year
        self.coverage_type = coverage_type
        self.base_premium = base_premium
        self.is_active = True

    def get_policy():
        # repair this code
        return

    def update_policy(self, holder_name=None, car_make=None, car_model=None, car_year=None, coverage_type=None):
        if holder_name:
            self.holder_name = holder_name
        if car_make:
            self.car_make = car_make
        if car_model:
            self.car_model = car_model
        if car_year:
            self.car_year = car_year
        if coverage_type:
            self.coverage_type = coverage_type

    def calculate_premium(self):
        age_of_car = 2024 - self.car_year
        premium_multiplier = 1.0

        if age_of_car > 5:
            premium_multiplier += 0.1
        if self.coverage_type == 'comprehensive':
            premium_multiplier += 0.2

        return self.base_premium * premium_multiplier

    def deactivate_policy(self):
        self.is_active = False

    def __str__(self):
        return (f"Policy Number: {self.policy_number}\n"
                f"Holder Name: {self.holder_name}\n"
                f"Car: {self.car_make} {self.car_model} ({self.car_year})\n"
                f"Coverage Type: {self.coverage_type}\n"
                f"Base Premium: ${self.base_premium:.2f}\n"
                f"Active: {self.is_active}")


policy = CarInsurancePolicy(
    policy_number="ABC12345",
    holder_name="John Doe",
    car_make="Toyota",
    car_model="Camry",
    car_year=2018,
    coverage_type="comprehensive",
    base_premium=500
)

# ----------------------------------------------------------------------------
# Exercise
# ----------------------------------------------------------------------------

# 1) initialize the object

# 2) preview the object

# 3) update the object

# 4) return the object

# 5) write a test for the object

# ----------------------------------------------------------------------------
# EOF
# ----------------------------------------------------------------------------