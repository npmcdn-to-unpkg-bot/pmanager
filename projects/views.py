from django.shortcuts import render

from projects.models import Category, Project
from rest_framework import viewsets
from projects.serializers import CategorySerializer, ProjectSerializer


# Create your views here.
def index(request):
    return render(request, 'projects/index.html')


# API viewsets
class CategoryViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows categories to be viewed or edited.
    """
    queryset = Category.objects.all().order_by('name')
    serializer_class = CategorySerializer


class ProjectViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows projects to be viewed or edited.
    """
    queryset = Project.objects.all().order_by('-created')
    serializer_class = ProjectSerializer
