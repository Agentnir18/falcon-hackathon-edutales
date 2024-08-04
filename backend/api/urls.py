from django.urls import path

from . import views

urlpatterns = [
    path("generate-story/", views.GenerateStory.as_view(), name="generate-story"), # post
    path("sitcom-explain/", views.SitcomExplain.as_view(), name="sitcom-explain"), # post

    path("run/", views.Runner.as_view(), name="run"), # get
    
]