from rest_framework.views import APIView
from .utils import CustomResponse, generate_story

class GenerateStory(APIView):
    def post(self, request):
        content = request.data.get("content")
        if not content:
            return CustomResponse(message="Content is required").failure_response()

        story = generate_story(content)
        return CustomResponse(data={"story": story}).success_response()