from django.urls import path

from .views import AddUserView, GroupListCreateView, GroupRetrieveUpdateDestroyView

urlpatterns = [
    path('', GroupListCreateView.as_view()),
    path('/<int:pk>', GroupRetrieveUpdateDestroyView.as_view()),
    path('/<int:pk>/user', AddUserView.as_view()),
]