from rest_framework.generics import CreateAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView

from apps.other_users.serializers import UserSerializer

from .filters import GroupFilter
from .models import OtherGroupModel
from .serializers import GroupSerializer


class GroupListCreateView(ListCreateAPIView):
    serializer_class = GroupSerializer
    queryset = OtherGroupModel.objects.all()
    filterset_class = GroupFilter


class GroupRetrieveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    serializer_class = GroupSerializer
    queryset = OtherGroupModel.objects.all()


class AddUserView(CreateAPIView):
    queryset = OtherGroupModel
    serializer_class = UserSerializer

    def perform_create(self, serializer):
        group = self.get_object()
        serializer.save(group=group)
