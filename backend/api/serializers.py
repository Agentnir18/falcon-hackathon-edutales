from rest_framework import serializers

class ContentSerializer(serializers.Serializer):
    content = serializers.CharField(required=True)

class ContentSitcomSerializer(serializers.Serializer):
    content = serializers.CharField(required=True)
    sitcom = serializers.CharField(required=True)