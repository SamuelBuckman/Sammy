from django.urls import path
from Post.views import index_view


urlpatterns = [
   path("",index_view,name="index")
   
]