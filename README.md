# TypeORM Blog Database

This project contains the TypeORM entities for a blog database, allowing you to manage and interact with the data of a blog. It also includes a UML diagram that illustrates the structure and relationships between the entities.

## Inspiration

This project draws inspiration from the article ["Guide to Design a Database for Blog Management in MySQL"](https://mysql.tutorials24x7.com/blog/guide-to-design-a-database-for-blog-management-in-mysql) by [MySQL Tutorials 24x7](https://mysql.tutorials24x7.com/). The article provides valuable insights and guidance on designing a database schema for blog management, which served as inspiration for this project.

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `yarn install` to install the required dependencies.

## Usage

1. Make sure you have a compatible database (e.g., MySQL, PostgreSQL) installed and running.
2. Update the database connection details in the `ormconfig.json` file to match your environment.
3. Use the provided TypeORM entities to define and manipulate the blog-related data in your application.

## Entity Structure

The project includes the following TypeORM entities:

- `User`: Represents a user of the blog.
- `Post`: Represents a blog post created by a user.
- `Comment`: Represents a comment left on a blog post.
- `Tag`: Represents a tag associated with a blog post.
- `Meta`: Represents additional metadata associated with a blog post.
- `Category`: Represents a category to which a blog post belongs.

For a detailed understanding of the entity structure and their relationships, refer to the included UML diagram (`blog-database-diagram.png`).

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
