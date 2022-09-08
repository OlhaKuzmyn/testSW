from rest_framework.generics import ListAPIView, RetrieveDestroyAPIView, UpdateAPIView, get_object_or_404

from apps.other_groups.models import OtherGroupModel

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
        group_id = self.kwargs.get('group_id')
        get_object_or_404(OtherGroupModel, pk=group_id)
        return OtherUserModel.objects.filter(group_id=group_id)

