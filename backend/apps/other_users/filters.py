from django_filters import rest_framework as filters

from .models import OtherUserModel


class UserFilter(filters.FilterSet):
    username_like = filters.CharFilter(field_name='username', lookup_expr='icontains')
    group_id = filters.NumberFilter(field_name='group', lookup_expr='id')

    class Meta:
        model = OtherUserModel
        fields = ('username_like', 'group_id')
