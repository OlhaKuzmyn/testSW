from rest_framework.generics import ListAPIView, RetrieveDestroyAPIView, UpdateAPIView

from .filters import UserFilter
from .models import OtherUserModel
from .serializers import UserSerializer


class UserListView(ListAPIView):
    queryset = OtherUserModel.objects.all()
    serializer_class = UserSerializer
    filterset_class = UserFilter


class UserRetrieveDestroyView(RetrieveDestroyAPIView):
    serializer_class = UserSerializer
    queryset = OtherUserModel.objects.all()


class UpdateUserView(UpdateAPIView):
    queryset = OtherUserModel
    serializer_class = UserSerializer

    def perform_update(self, serializer):
        group_id = self.kwargs.get('group_id')
        serializer.save(group_id=group_id)


class FilteredUserView(ListAPIView):
    serializer_class = UserSerializer

    def get_queryset(self):
        return OtherUserModel.objects.filter(group_id=1)
