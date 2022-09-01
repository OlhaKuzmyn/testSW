from rest_framework.serializers import ModelSerializer

from apps.other_groups.serializers import GroupSerializer

from .models import OtherUserModel


class UserSerializer(ModelSerializer):
    group = GroupSerializer(read_only=True)

    class Meta:
        model = OtherUserModel
        fields = (
            'id', 'username', 'created', 'group'
        )
        read_only_fields = (
            'id', 'group'
        )
