Feature: Ecommerce Validations

Scenario Outline: Placing the order
Given a login to Ecommerce application with "<username>" and "<password>"

Examples:
    | username               | password |
    | antara92.mou@gmail.com | I@w2Ba$E |
    |test@gmail.com          | test@123 |