
### Folder Structure Legends

- `src:` The main source code directory.

- `docs:` Project Documentation including changelogs, contribution guide etc.

- `components:` Reusable UI components.

- `context:` Application context and state management.

- `assets:` Static resources such as images and icons.

- `services:` Service modules that encapsulate logic for interacting with external APIs.

- `styles:` Style-related utilities.

- `utils:` General utility functions and helpers.

- `App.jsx:` The main entry point of the application.

- `.env:` Environment configuration file.

- `LICENSE:` The license file for the project.

- `package.json:` Metadata and dependencies for the project.

- `changelog.md:` Information about previous versions of the project.

- `readme.md:` Information and instructions about the project.

## Code Guidelines

### File Naming

- Use PascalCase for component and context filenames: `MyComponent.jsx`, `UserContext.js`.

- Use camelCase for service, style, and utility filenames: `apiService.js`, `styles.css`, `utilityFunctions.js`.

- Keep filenames concise and descriptive.

### Component Structure

- Components should have a single responsibility.

- Group related files for a component within the same folder.

- Prefer functional components and React hooks over class components.

### Indentation and Formatting

- Use **2 spaces** for indentation.

- Format code consistently, ensuring readability.

### Variable Naming

- Use camelCase for variable and function names.

- Use descriptive names that convey the purpose of the variable.

### Comments

- Use comments to explain complex logic or why a particular approach was chosen.

- Keep comments concise and to the point.

### Imports

- Import statements should be grouped and ordered consistently.

- Use absolute imports for frequently used paths.

### Styles

- Use CSS modules for component-specific styles.

- Utilize the `styles` folder for global styles, variables, and mixins.

### Code Organization

- Organize imports alphabetically and logically.

- Group related functions and methods together.

### Error Handling

- Always handle errors using try-catch blocks or error handling mechanisms.

### Environmental Variables

- Use `.env` files to manage environment-specific configurations.

### Version Control

- Follow Git commit conventions and include a meaningful commit message.

### Documentation

- Provide clear and concise comments for complex logic.

- Maintain an up-to-date `README.md` with project information, installation instructions, and usage guidelines.

### Code Review

- Encourage code reviews to ensure adherence to coding standards.

## Conclusion

Following these coding style guidelines will lead to consistent and maintainable code across the project. Consistency fosters collaboration and simplifies the process of maintaining and extending the application.
