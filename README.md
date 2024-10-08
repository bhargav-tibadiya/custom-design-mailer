# Custom Design Mailer

## Overview

This is a simple mail sender application built with Node.js and Express. It allows users to send emails with custom designs conveniently. The application runs on a local server and exposes an API endpoint for sending emails.

## Prerequisites

- Node.js installed on your system
- npm (Node Package Manager)

## Installation

1. Clone the repository or download the source code.
2. Navigate to the project directory in your terminal.
3. Run the following command to install the required dependencies:

   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add the following environment variables:

   ```
   PORT=4000
   MAIL_HOST=your_smtp_host
   MAIL_USER=your_email_username
   MAIL_PASS=your_email_password
   MAIL_FROM=sender@example.com
   MAIL_TO=recipient@example.com
   MAIL_SUBJECT=Your Email Subject
   ```

   Replace the values with your actual SMTP settings and email details.

## Running the Application

To start the server, run the following command in the project directory:

```
npm start
```

The server will start running on `http://localhost:4000`.

## API Endpoint

### Send Email

- **URL**: `/api/v1/sendmail`
- **Method**: POST
- **Description**: Sends an email with the custom design

#### Request

No request body is required. The email content and recipient details are configured in the `.env` file.

#### Response

- **Success Response**:
  - **Code**: 200
  - **Content**: 
    ```json
    {
      "success": true,
      "message": "Mail Successfully Sent"
    }
    ```

- **Error Response**:
  - **Code**: 400
  - **Content**:
    ```json
    {
      "success": false,
      "message": "Something Went Wrong while Sending Mail"
    }
    ```

## Project Structure

- `server.js`: Main entry point of the application
- `router/Mail.js`: Defines the API routes
- `controller/Mail.js`: Contains the logic for sending emails
- `design/design.js`: Contains the HTML design for the email (not provided in the given code)

## Customization

To customize the email content, modify the `design/design.js` file (not provided in the given code). This file should export an HTML string that will be used as the email body.

## Error Handling

The application includes basic error handling. If an error occurs while sending the email, it will be logged to the console, and an error response will be sent back to the client.

## Security Considerations

- Ensure that your `.env` file is included in your `.gitignore` to prevent sensitive information from being exposed.
- Consider implementing rate limiting and other security measures for production use.

## Limitations

- This application is designed to run on localhost and is not configured for production deployment.
- The current implementation sends emails to a single recipient defined in the `.env` file.

## Support

For any issues or questions, please open an issue in the project repository or contact the project maintainer.
