from django.contrib import admin

from .models import BookMark, Project, Note
# Register your models here.
admin.site.register(Project)
admin.site.register(BookMark)
admin.site.register(Note)