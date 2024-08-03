from ai71 import AI71
from decouple import config
from rest_framework.response import Response
from rest_framework import status

class CustomResponse():
    def __init__(self, message=None, data=None):
        self.message = {} if message is None else message
        self.data = {} if data is None else data

    def success_response(self):
        self.error = False
        self.status_code = status.HTTP_200_OK
        return Response({
            "error": self.error, 
            "message": self.message, 
            "data": self.data, 
            "status_code": self.status_code
            }, status=self.status_code)
    
    def failure_response(self):
        self.error = True
        self.status_code = status.HTTP_400_BAD_REQUEST
        return Response({
            "error": self.error, 
            "message": self.message, 
            "data": self.data, 
            "status_code": self.status_code
            }, status=self.status_code)

AI71_API_KEY = config("AI71_API_KEY")

def generate_story(content):
    
    client = AI71(AI71_API_KEY)

    messages = [{"role": "system", "content": "You are an educational storyteller who creates engaging and informative stories to help users understand scientific concepts."}]

    content_format =f"""
    Generate a scientific fictional story that explains the following content. The story should have some characters that have dialogue between them. The story must be family-friendly and use simple, everyday words for better understanding.
    Don't use cliches or stereotypes. The story should be original and creative.

    {content}

    Please create a story where two children, Leo and Mia, visit their Uncle Max's lab and learn about the above given content through a series of explanations and experiments. The story should have dialogue between the characters and explain the scientific concepts in a way that is easy to understand.
    """ 
    messages.append({
        "role": "user", 
        "content": content_format
        })
    # print(f"Falcon:", sep="", end="", flush=True)

    story = ""

    for chunk in client.chat.completions.create(
        messages=messages,
        model="tiiuae/falcon-180B-chat",
        stream=True,
    ):
        delta_content = chunk.choices[0].delta.content
        if delta_content:
            story += delta_content

    return story