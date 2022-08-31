from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

from .models import OtherGroupModel
from .serializers import GroupSerializer


class GroupListCreateView(ListCreateAPIView):
    serializer_class = GroupSerializer
    queryset = OtherGroupModel.objects.all()


class GroupRetrieveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    serializer_class = GroupSerializer
    queryset = OtherGroupModel.objects.all()