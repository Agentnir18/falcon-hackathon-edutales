from rest_framework.views import APIView
from .utils import CustomResponse
from ai.story_generator import generate_story, sitcom_explain
from .serializers import ContentSerializer, ContentSitcomSerializer

class GenerateStory(APIView):
    """
    API endpoint to generate a story explaining the given content.
    Only POST method is allowed.

    Send a request with the content to be explained in the story. The content is accessed using the key "content".

    request: {
        "content": "The scientific content to be explained in the story."
    }

    successful response: {
        "message": "Successfully generated story",
        "data": {
            "story": "The generated story explaining the scientific content."
        }
    }
    """
    def post(self, request):
        serializer = ContentSerializer(data=request.data)
        if serializer.is_valid():
            content = serializer.validated_data["content"]
            story = generate_story(content)
            return CustomResponse(message="Successfully generated story", data={"story": story}).success_response()
        return CustomResponse(message="Error generating story", data=serializer.errors).failure_response()
    
class SitcomExplain(APIView):
    """
    API endpoint to generate a sitcom-style story explaining the given content.
    Only POST method is allowed.

    Send a request with the content to be explained in the story and the name of the sitcom to be used as the setting.
    The content is accessed using the key "content" and the sitcom name is accessed using the key "sitcom".

    request: {
        "content": "The scientific content to be explained in the story.",
        "sitcom": "The name of the sitcom to be used as the setting for the story."
    }

    successful response: {
        "message": "Successfully generated story",
        "data": {
            "story": "The generated sitcom-style story explaining the scientific content."
        }
    }

    """
    def post(self, request):
        serializer = ContentSitcomSerializer(data=request.data)
        if serializer.is_valid():
            content = serializer.validated_data["content"]
            sitcom = serializer.validated_data["sitcom"]
            story = sitcom_explain(content, sitcom)
            return CustomResponse(message="Successfully generated story", data={"story": story}).success_response()
        return CustomResponse(message="Error generating videos", data=serializer.errors).failure_response()