from django.urls import path
from comments import views




urlpatterns = [
    path('all/', views.get_all_comments),
    path('create/', views.create_comment),
    path('all/replies/', views.get_all_replies),
    path('create/reply/', views.create_reply),
]