from django.urls import path

from .views import FilteredUserView, UpdateUserView, UserListView, UserRetrieveDestroyView

urlpatterns = [
    path('', UserListView.as_view()),
    path('/<int:pk>', UserRetrieveDestroyView.as_view()),
    path('/<int:pk>/update_user/<int:group_id>', UpdateUserView.as_view()),
    path('/filtered', FilteredUserView.as_view()),
]