from .models import Group
from rest_framework import status
from apps.users.models import User
from rest_framework import generics
from .serializers import GroupSerializer
from rest_framework.response import Response
from main.paginations import CustomPagination

class GroupListView(generics.ListCreateAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    pagination_class = CustomPagination



class GroupDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

    def delete(self, request, *args, **kwargs):
        try:
            list_ = []
            """
            in this loop get all group when user assigned
            and append to groups_name list 
            """
            for user in User.objects.all():
                for group in user.group.all():
                    if group.name not in list_:
                        list_.append(group.name)
                    else:
                        continue
            """
            when delete some group
            Check the group in groups_name list
            if group have in groups_name 
            send response 405 method not allowed,
            if group not in groups name,
            user can delete group
            """             
            if Group.objects.get(pk=kwargs['pk']).name in list_:
                return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)
            else:
                return self.destroy(request, *args, **kwargs)
        except:
            raise ValueError("Wrong")

