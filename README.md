# Project: Mini Message Board
## Project Summary
MiniMessageBoard is a web application that allows users to post and view messages. It features message submission, a list of messages, and detailed views for each message.

### Technology Stack
- **Node.js** and **Express** for the server
- **PostgreSQL** for data storage
- **EJS** for templating
- **CSS** for styling

### Project Structure
- Controllers handle business logic (`controllers/indexController.js`)
- Routes define endpoints (`routes/indexRouter.js`)
- Database scripts manage data (`db/pool.js`, `db/queries.js`, `db/populatedb.js`)
- Views and static files for UI (`views/`, `public/styles.css`)