from rest_framework.views import APIView
from .utils import CustomResponse
from ai.story_generator import generate_story
from .serializers import ContentSerializer

class GenerateStory(APIView):
    def post(self, request):
        serializer = ContentSerializer(data=request.data)
        if serializer.is_valid():
            content = serializer.validated_data["content"]
            story = generate_story(content)
            return CustomResponse(message="Successfully generated story", data={"story": story}).success_response()
        return CustomResponse(message="Error generating videos", data=serializer.errors).failure_response()