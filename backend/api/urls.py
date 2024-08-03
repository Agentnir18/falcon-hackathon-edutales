from django.urls import path

from . import views

urlpatterns = [
    path("generate-story/", views.GenerateStory.as_view(), name="generate-story"), # post
    
]