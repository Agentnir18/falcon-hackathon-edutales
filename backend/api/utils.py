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