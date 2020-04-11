from .models import User
from rest_framework import generics
from .serializers import UserSerializer
from main.paginations import CustomPagination

class UserListView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    pagination_class = CustomPagination


class UserDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer