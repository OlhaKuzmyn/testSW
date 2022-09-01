from django.urls import path

from .views import UpdateUserView, UserListView, UserRetrieveDestroyView

urlpatterns = [
    path('', UserListView.as_view()),
    path('/<int:pk>', UserRetrieveDestroyView.as_view()),
    path('/<int:pk>/update_user/<int:group_id>', UpdateUserView.as_view()),
]