from rest_framework import serializers

class ContentSerializer(serializers.Serializer):
    content = serializers.CharField(required=True)