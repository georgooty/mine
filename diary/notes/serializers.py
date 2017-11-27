from rest_framework import serializers

from .models import Project, BookMark, Note



class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'


class ProjectSerializer(serializers.ModelSerializer):
    project_notes=  NoteSerializer(read_only=True, many = True)
    class  Meta:
        model=Project
        fields = '__all__'

class BookMarkSerializer(serializers.ModelSerializer):
    bookmark_notes = NoteSerializer(read_only=True, many=True)
    class Meta:
        model = BookMark
        fields = '__all__'

