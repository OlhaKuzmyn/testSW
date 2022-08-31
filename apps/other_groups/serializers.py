from rest_framework.serializers import ModelSerializer

from .models import OtherGroupModel


class GroupSerializer(ModelSerializer):
    class Meta:
        model = OtherGroupModel
        fields = (
            'id', 'name', 'description'
        )
        read_only_fields = (
            'id',
        )
