from django_filters import rest_framework as filters

from .models import OtherGroupModel


class GroupFilter(filters.FilterSet):
    name_like = filters.CharFilter(field_name='name', lookup_expr='icontains')

    class Meta:
        model = OtherGroupModel
        fields = ('name_like',)
