# UI Dashboard Django

A **[UI Dashboard Django Template](https://www.creative-tim.com/templates/django)** with a modern Bootstrap 5 design. Start your development with a modern Bootstrap 5 Admin template for Django. If you want to code faster, with a smooth workflow, then you should try this template carefully developed with Django, a well-known Python Framework.

## Demo

> To authenticate use the default credentials ***test / ApS12_ZZs8*** or create a new user on the **registration page**.

- **UI Dashboard Django** [Login Page](https://www.creative-tim.com/live/soft-ui-dashboard-django)

## Quick start

Clone the reopository or unzip the sources. After getting the code, open a terminal and navigate to the working directory, with product source code.

```cmd
# Get the code
git clone https://github.com/saiicodes/python-ui-dashboard.git
cd ui-dashboard
```

**Step #1** - Setup virtural enviromenment

```cmd
# Setup virtual enviromenment

# macOS/Linux
# You may need to run sudo apt-get install python3-venv first
python3 -m venv .venv

# Windows
# You can also use python -m venv .venv or py -3 -m venv .venv
py -m venv .venv
```

**Step #2** - Install modules

```cmd
py -m pip install -r requirements.txt # windows

python -m pip install -r requirements.txt # macOS/Linux
```

**Step #3** - Create Tables

```cmd
# windows
py manage.py makemigrations
py manage.py migrate

# macOS/Linux
python manage.py makemigrations
python manage.py migrate
```

**Step #4** - Start the application (development mode )

You can start the application in development mode by running the following command:

```cmd
# windows
py manage.py runserver

# macOS/Linux
python manage.py runserver
```

**Recommendation for running the application in development mode**

For an automated workflow using gulp, you can use the following commands:

> Before running the following commands, make sure you have [Node.js](https://nodejs.org/en/download/) and [gulp](https://gulpjs.com/docs/en/getting-started/quick-start) installed.

1. Run `npm install` or `yarn install` to install all the required dependencies.

2. Now run `gulp` to start the development server.

Access the web app in browser: <http://127.0.0.1:8000/>

> Note: To use the app, please access the registration page and create a new user. After authentication, the app will unlock the private pages.
