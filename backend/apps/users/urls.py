from django.urls import path
from apps.groups.views import GroupListView, GroupDetailView
from .views import UserListView, UserDetailView

urlpatterns = [
    path('users/', UserListView.as_view()),
    path('users/<int:pk>/', UserDetailView.as_view()),
    path('groups/', GroupListView.as_view(), name='groups'),
    path('groups/<int:pk>/', GroupDetailView.as_view(), name='group_details'),
]
