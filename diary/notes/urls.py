from rest_framework.routers import DefaultRouter

from .api import ProjectNotesViewSet, BookMarkNotesViewSet,NoteViewSet

router = DefaultRouter()
router.register(r'projects',ProjectNotesViewSet)
router.register(r'bookmarks',BookMarkNotesViewSet)
router.register(r'notes',NoteViewSet)

urlpatterns = router.urls
