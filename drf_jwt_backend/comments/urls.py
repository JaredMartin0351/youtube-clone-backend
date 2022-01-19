from django.urls import path
from comments import views




urlpatterns = [
    path('all/', views.CommentList.as_view()),
    path('', views.create_comment),
    path('', views.get_all_replies),
]