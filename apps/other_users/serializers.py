from rest_framework.serializers import ModelSerializer

from apps.other_groups.serializers import GroupSerializer

from .models import OtherUserModel


class UserModel(ModelSerializer):
    group = GroupSerializer()

    class Meta:
        model = OtherUserModel
        fields = (
            'id', 'username', 'created', 'group'
        )
