
# Interview Coding Task: User Retrieval System

## Overview

This task is designed to assess your ability to implement role-based access control in a Node.js application. Specifically, you will be enhancing an existing system to ensure that users can only be obtained if the requesting admin has the role of `SUPER_ADMIN`. You will also need to validate the admin's role and write appropriate tests to verify your implementation.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js (version 19)
- Git

## Setup Instructions

1. **Clone the Repository:**

   First, clone the repository containing the starter code to your local machine using Git:

   ```bash
   git clone https://github.com/signal-os/zadanie-be
   cd zadanie-be
   ```

2. **Install Dependencies:**

   Navigate to the project directory and install the required Node.js dependencies:

   ```bash
   npm install
   ```

3. **Run Tests:**

   The project uses Jest for testing. Tests can be launched with the following command:

   ```bash
   node_modules/jest/bin/jest.js
   ```

## Task Description

Your task is to implement a feature within the system that retrieves users, subject to the following requirement:

- **Role Validation:** Ensure that users can only be obtained if the requesting admin's role is `SUPER_ADMIN`.


### What We're Looking For

- **Correctness:** The implementation should correctly restrict access to user data based on the admin's role.
- **Code Quality:** Your code should be clean, well-organized, and follow best practices.
- **Error Handling:** The system should gracefully handle and report errors, especially for unauthorized access attempts.

## Writing Tests

You are expected to write comprehensive tests for your implementation using Jest. Your tests should cover the following scenarios at a minimum:

- Retrieving users with an admin having the `SUPER_ADMIN` role.
- Attempting to retrieve users with an admin lacking the `SUPER_ADMIN` role.


