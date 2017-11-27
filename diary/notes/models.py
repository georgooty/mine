from django.db import models
from django.utils.encoding import python_2_unicode_compatible

# Create your models here.
class Project(models.Model):
    name=models.CharField(max_length=100)
    description=models.TextField(blank=True)

    def __str__(self):
        return "Project: {}".format(self.name)

class BookMark(models.Model):
    name=models.CharField(max_length=100)
    description = models.TextField(blank=True)

    def __str__(self):
        return "BookMark: {}".format(self.name)

class Note(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    project = models.ForeignKey(Project,null=True, blank=True,related_name='project_notes')
    book_mark = models.ForeignKey(BookMark,null=True, blank=True,related_name='bookmark_notes')

    def __str__(self):
        return "Note: {}".format(self.title)