from rest_framework.views import APIView
from .utils import CustomResponse
from ai.story_generator import generate_story, sitcom_explain
from .serializers import ContentSerializer, ContentSitcomSerializer

class GenerateStory(APIView):
    def post(self, request):
        serializer = ContentSerializer(data=request.data)
        if serializer.is_valid():
            content = serializer.validated_data["content"]
            story = generate_story(content)
            return CustomResponse(message="Successfully generated story", data={"story": story}).success_response()
        return CustomResponse(message="Error generating videos", data=serializer.errors).failure_response()
    
class SitcomExplain(APIView):
    def post(self, request):
        serializer = ContentSitcomSerializer(data=request.data)
        if serializer.is_valid():
            content = serializer.validated_data["content"]
            sitcom = serializer.validated_data["sitcom"]
            story = sitcom_explain(content, sitcom)
            return CustomResponse(message="Successfully generated story", data={"story": story}).success_response()
        return CustomResponse(message="Error generating videos", data=serializer.errors).failure_response()