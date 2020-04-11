from .models import User
from apps.groups.models import Group
from apps.groups.serializers import GroupSerializer
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    group = serializers.SlugRelatedField(
        queryset= Group.objects.all(),
        many=True,
        slug_field='name'
        )

    groups_name = GroupSerializer(
        source='group',
        read_only=True,
        many=True,
    )

    class Meta:
        model = User
        fields = ('id', 'username', 'created', 'groups_name', 'group')
