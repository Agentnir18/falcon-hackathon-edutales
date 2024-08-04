# Backend for the StoryWise project

The backend for the StoryWise project is a RESTful API built using the Django REST framework. The API provides endpoints for generating stories. The backend connects to the Falcon model to generate stories.

## Setup

1. Set up a virtual environment and activate it.
```bash
python3 -m venv venv
```

for Windows:
```bash
venv\Scripts\activate
```

for MacOS/Linux:
```bash
source venv/bin/activate
```

2. Install the dependencies.
```bash
pip install -r requirements.txt
```

3. Setting up environment variables.
Create a `.env` file in the root directory and add the following environment variables.
```bash
FAAI71_API_KEY=YOUR_API_KEY
SECRET_KEY = YOUR_SECRET_KEY_FOR_DJANGO
DEBUG = True
ALLOWED_HOSTS = *
```

4. Run the server.
```bash
python manage.py runserver
```

## Endpoints

The API provides the following endpoints:

1. `/api/v1/generate-story/`: Generates a story to explain the given concept.
2. `/api/v1/sitcom-explain/`: uses the characters from the sitcom to explain the concept.