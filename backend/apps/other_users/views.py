from rest_framework.generics import ListAPIView, RetrieveDestroyAPIView, UpdateAPIView

from .models import OtherUserModel
from .serializers import UserSerializer


class UserListView(ListAPIView):
    queryset = OtherUserModel.objects.all()
    serializer_class = UserSerializer


class UserRetrieveDestroyView(RetrieveDestroyAPIView):
    serializer_class = UserSerializer
    queryset = OtherUserModel.objects.all()


class UpdateUserView(UpdateAPIView):
    queryset = OtherUserModel
    serializer_class = UserSerializer

    def perform_update(self, serializer):
        group_id = self.kwargs.get('group_id')
        serializer.save(group_id=group_id)
