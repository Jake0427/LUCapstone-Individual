# Liberty University 2021 Capstone Project Individual Project by Jacob Davidson

## Steps to complete once downloading from GitHub

### Setting up the database
  - Ensure You are Using SQL Server Management Studio 18 to gain access to the database required for the application.
  - Follow this guide if you have not already done so: https://docs.microsoft.com/en-us/sql/database-engine/install-windows/upgrade-to-a-different-edition-of-sql-server-setup?view=sql-server-ver15.
  - If you do not have SQL server Managment Studio Installed, follow this guide: https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver15.
  - Place the database backup file (ending with ".bak" into your system's SQL database backup folder (EX: C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\Backup).
  - Once SSMS 18 has been installed on your machine connect to (either locally or to a server).
  - Once connected, open the navigation until you see "Databases". Right-Click on Databases, and select "Restore Database".
  - In the restore menu, select the Device Button, then click the "..." symbol on the right side of the screen.
  - Click the "Add" Button on the right side of the screen.
  - Select the "LUCapstone-Individual.bak" File and click "OK" at the bottom of the window.
  - Click "OK" at the bottom of the window once more.
  - Finally, click "OK" at the bottom of the final window.
  - Once the database has been restored, you are ready for the next steps and the application should be able to run and connect without issue.
  
### For the API
  - For this to run properly, you will need Visual Studio 2019 installed on your machine.
  - To install this, go to this link (https://visualstudio.microsoft.com/downloads/) and install the community version.
  - Once the installer is up, install the .NET CORE packages.
  - Once that's done Open the CapstoneAPI2.sln file in Visual Studio 2019.
  - Navigate to the "appsettings.json" file
  - Where it says Data Source=".;" change the "." to the connection you used to connect to the database in SSMS.
  - Save the project.
  - open command line and navigate to the project folder (EX: cd C:\Users\\{Username}\Documents\GitHub\LUCapstone-Individual\CapstoneIndividualAPI\CapstoneIndividualAPI).
  - next in command prompt/terminal type "dotnet run" to start the API.
  - Alternatively, click the run button inside Visual Studio 2019 to run the project.
  - A new tab will appear in your default browser, but this can be ignored.
  
### For the Angular Project
  - To view the project code, you will also need visual studio code. to install visual studio code, follow this link (https://code.visualstudio.com/download) and download and install the appropriate version.
  - Once installed, navigate to the project folder in a command prompt (EX: cd C:\Users\\{Username}\Documents\GitHub\LUCapstone-Individual\LUCapstoneIndividualAngular).
  - type "code ." in the command prompt and it will launch visual studio code.
  - In order to run the project, you will need NPM installed on your machine.
  - To install NPM, follow this link (https://nodejs.org/en/).
  - Download the recommended version.
  - Double click the installer and follow the instructions.
  - Open a command line and navigate to the project folder (EX: cd C:\Users\\{Username}\Documents\GitHub\LUCapstone-Individual\LUCapstoneIndividualAngular).
  - in the command prompt type "npm update" to update the packages necessary.
  - to run the project in your browser, in that same command prompt type "ng s --o" (or ng serve --open).
  - This will open a tab in your default browser displaying the project.

## Other Required Documentation

### Test Plan
  - To test this application, I will have 4 users sit down at the project source computer with the application opened.
  - Next step is to give them a list of tasks
    - This list of tasks include : Add a person, Update a person's information, and delete a person from the table
  - success will be measured in the time it takes to complete each of these tasks and ease of use on a scale of 1-10

### Test Plan Result
  - USER 1: 
    - Time to complete Add Person Function: 18 seconds
    - Time to complete Edit Person Function: 19 seconds
    - Time to complete Delete Person Function: 7 seconds
    - Ease of use of add person button: 9/10
    - Ease of use of edit person button: 8/10
    - Ease of use of delete person button: 10/10
  - USER 2
    - Time to complete Add Person Function: 20 seconds
    - Time to complete Edit Person Function: 20 seconds
    - Time to complete Delete Person Function: 8 seconds
    - Ease of use of add person button: 8/10
    - Ease of use of edit person button: 8/10
    - Ease of use of delete person button: 9/10
  - USER 3
    - Time to complete Add Person Function: 16 seconds
    - Time to complete Edit Person Function: 17 seconds
    - Time to complete Delete Person Function: 6 seconds
    - Ease of use of add person button: 9/10
    - Ease of use of edit person button: 9/10
    - Ease of use of delete person button: 10/10
  - USER 4
    - Time to complete Add Person Function: 17 seconds
    - Time to complete Edit Person Function: 20 seconds
    - Time to complete Delete Person Function: 8 seconds
    - Ease of use of add person button: 8/10
    - Ease of use of edit person button: 7/10
    - Ease of use of delete person button: 10/10

### Test Plan Results Continued
  - The results of the testing were fairly consistent and functionality was proven to be user friendly

### Biblical integration
  - this project was created to help prototype my team's main capstone project. That main capstone project is for an organization called Christian Aid. Their previous software was extremely slow and stopped them from doing the work that they do. Our task is to help fix that. The use of the internet is almost imperative in this day and age, and it is a great way to spread the Gospel, which is one of our main goals as Christians.
  
## For full connectivity, ensure the API is running before you start the angular project so the data from the database can load
  
  
  
  
