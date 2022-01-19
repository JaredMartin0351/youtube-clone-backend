from django.urls import path
from comments import views




urlpatterns = [
    #path('all/', views.get_all_comments),
    path('create/', views.create_comment),
    path('all/replies/', views.get_all_replies),
    path('create/reply/', views.create_reply),
    path('edit/<int:pk>/', views.update_comment),
<<<<<<< HEAD
    path("<int:pk>/",views.get_comment),
    path('reply/<int:comment_id>/',views.get_comment_reply),
    path("all/<str:video_id>/",views.get_video_comments)
=======
    path('<int:pk>/', views.get_comment),
    path('reply/<int:comment_id>/', views.get_comment_reply),
    path('delete/<int:pk>/', views.delete)
>>>>>>> bfcedb97571e35dc322adc754e25fc00b5f406b0
]