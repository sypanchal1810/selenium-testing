# Selenium Test Script

This repository contains a Selenium test script written in JavaScript using Node.js to automate the testing of
[The Sparks Foundation Website](https://www.thesparksfoundationsingapore.org). The script uses Selenium WebDriver to
interact with the website and perform various checks on different page and different elements.

## Table of Contents

- [Introduction to Selenium](introduction-to-selenium)
- [Requirements](#requirements)
- [Installation and Usage](#installation-and-usage)

## Introduction to Selenium

Selenium is an open-source framework used for automating web browsers. It provides a set of tools and libraries to
control browser behavior and interact with web elements. Selenium WebDriver is one of the key components of Selenium,
allowing you to write scripts in various programming languages such as Python, Java or JavaScript to automate web
testing.

Selenium WebDriver works by establishing a communication bridge between the test script and the web browser. It uses the
WebDriver API to send commands to the browser, which then executes those commands and sends the results back to the
script. This allows you to simulate user interactions, perform validations, and automate repetitive tasks on web pages.

## Requirements

- Node.js (v12 or higher)
- Selenium WebDriver
- IDE - VS Code Editor

## Installation and Usage

1. Clone the repository:

   ```
   git clone https://github.com/sypanchal1810/selenium-testing.git
   ```

2. Install the dependencies:

   ```
   npm install
   ```

3. Run the test script:

   ```
   npm start
   ```

   The script will open the website in chrome browser window and perform the specified checks on various elements. The
   results will be displayed in the console of VS Code Editor.

4. Customize the script:

   You can also modify the `script.js` file to include additional checks or modify the existing checks according to your
   testing requirements. You can also take the snapshot of the current viewport of website. Refer to the
   [Selenium documentation](https://www.selenium.dev/documentation/) for more information on available methods and
   techniques.
