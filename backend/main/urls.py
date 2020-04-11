from django.contrib import admin
from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework.schemas import get_schema_view
from rest_framework_swagger.views import get_swagger_view

API_TITLE = 'Test Task Synergy Way'
API_DESCRIPTION = 'A Web API for creating, deleting and editing Users and Groups. '
schema_view = get_swagger_view(title=API_TITLE)

urlpatterns = [
    path('api/v1/', include('apps.users.urls')),
    path('', include_docs_urls(title=API_TITLE, 
        description=API_DESCRIPTION
    )),
    path('api/v1/swagger-docs/', schema_view),
    path('admin/', admin.site.urls),
]
