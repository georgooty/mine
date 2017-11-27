from rest_framework.viewsets import ModelViewSet

from .serializers import BookMarkSerializer,NoteSerializer,ProjectSerializer
from .models import Project, BookMark, Note

class ProjectNotesViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class BookMarkNotesViewSet(ModelViewSet):
    queryset = BookMark.objects.all()
    serializer_class = BookMarkSerializer

class NoteViewSet(ModelViewSet):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer