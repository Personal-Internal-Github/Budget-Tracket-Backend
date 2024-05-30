Greetings!

Please be inform that I cannot successfully deployed the backend code in a free hosting web. I believe this is due to different hosting behaviour.

I had tried to host this code in Netlify but after I follow the documentation, Netlify still cannot detect the code. After that I tried Render, but Render has stop the support for connecting to local database.

This Readme file will give you break down of the code and how to run it.

**How To Run In Local**
1) Please go to "Code" above and download the source code.

2) Open the code in local IDE, and run command "npm i".

3) To run the code, run command "npm run dev".

**Code Explanation**
1) Project Structure

![image](https://github.com/Personal-Internal-Github/Budget-Tracket-Backend/assets/60610270/70563883-0310-4e62-8757-0e17b1ffcb43)

The main point of the code is in "index.js" that located in the root folder. This file contain all the standard Node js application setup.

!!PLEASE NOTE: The ".env" file is not included as it contains local database credentials. As for the table sql create code, it will be given seperated.

2) Routes

![image](https://github.com/Personal-Internal-Github/Budget-Tracket-Backend/assets/60610270/74e97903-0ac2-4624-8fb2-0008e6d0d480)

For routes folder, it contains 2 API folder with its respective functionality. Both of these API folders, will be combine "index.js" that locate at the same folder level for export purposes.

2.1) Income API

![image](https://github.com/Personal-Internal-Github/Budget-Tracket-Backend/assets/60610270/b238e0d4-4edd-4c92-8516-33a867c3f4f2)

In Income API, it has 4 APIs route. 2 is for getting the income list by month and get all income list manner. While the other 2 is for storing and deleting income record.

2.2) Expense API

![image](https://github.com/Personal-Internal-Github/Budget-Tracket-Backend/assets/60610270/44c34981-f6ea-41e7-af67-ae76fb69f280)

The same goes for Expense API as well.





