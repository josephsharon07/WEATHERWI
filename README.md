![WEATHERWI IoT Weather and Environment Monitoring System](/docs/assets/img/logo-side-dark.png)

## How to Use WEATHERWI IoT Weather and Environment Monitoring System

To use the WEATHERWI IoT Weather and Environment Monitoring System, follow these step-by-step instructions:

1. **Fork the Repository:**

   - Start by forking the WEATHERWI repository on GitHub. This will create your own copy of the project.

2. **Create a Wokwi Project:**

   - Create a project on Wokwi, a platform for simulating microcontroller projects.
   - Upload the files from the "Wokwi Files" folder in your forked repository to your Wokwi project. These files are essential for simulating the project.

3. **Get the GitHub API Token:**

   - Obtain a GitHub API token for authentication purposes. You'll use this token to access your GitHub repository and update data.

4. **Edit the `main.py` File in Wokwi:**

   - In your Wokwi project, open the `main.py` file.
   - Modify the following variables in the `main.py` file with your GitHub information:

     - `repository_owner`: Replace with the owner (your GitHub username or organization) of your forked repository.
     - `repository_name`: Replace with the name of your forked repository.
     - `access_token`: Replace with the GitHub API token you obtained earlier.

5. **Run the File:**

   - After editing the `main.py` file, run the file within your Wokwi project. This will update the data in the "Database" folder in your forked repository.

6. **Redirect to GitHub Pages:**

   - Once the file is run successfully, visit your forked repository on GitHub.
   - Click on the "Settings" tab of your repository.

7. **Configure GitHub Pages:**

   - Scroll down to the "GitHub Pages" section in the repository settings.
   - Under the "Source" settings, select "docs" as the source for your GitHub Pages.

8. **Save Changes:**

   - Save the configuration changes. GitHub Pages will now use the "docs" folder for hosting.

9. **Access the Web Page:**

   - After saving the changes, you will receive a URL where the web page is hosted using GitHub Pages.
   - Visit this URL to access the WEATHERWI IoT Weather and Environment Monitoring System.

You have now successfully set up and accessed the WEATHERWI IoT Weather and Environment Monitoring System. You can monitor real-time and historical environmental data through the provided web page.

If you encounter any issues or have questions, feel free to reach out for support. Enjoy using the system!
