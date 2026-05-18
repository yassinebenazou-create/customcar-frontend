# CUSTOMCAR API

Express API prepared for Hostinger Node.js Hosting with MySQL.

## Environment

Create the backend environment variables in Hostinger:

```env
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=
PORT=
CLIENT_ORIGIN=https://your-frontend-domain.com
JWT_SECRET=change-me-to-a-long-random-string
```

Optional email alerts:

```env
SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=
SMTP_FROM=
ALERT_EMAIL=
```

## Install

```bash
npm install
```

## Create MySQL tables

Run once after setting the database variables:

```bash
npm run db:init
```

You can also import `database/schema.sql` from Hostinger phpMyAdmin.

## Start

```bash
npm start
```

Hostinger should point the Node.js app entry file to:

```text
server.js
```

The frontend can keep using the same API paths:

```text
/api/contacts
/api/services
/api/portfolio
/api/testimonials
```
