from django.conf.urls import url
from .views import *

urlpatterns = [
    url(r'^signup/$', SignupView.as_view(), name='signup'),
    url(r'^login/$', LoginView.as_view(), name='login'),
    url(r'^logout/$', LogoutView.as_view(), name='logout'),
    url(r'^dashboard/$', DashboardView.as_view(), name='dashboard'),
    url(r'^profile/$', ProfileView.as_view(), name='profileme'),
    url(r'^profile/(?P<user_id>[0-9]+)/$', ProfileView.as_view(), name='profile'),
    url(r'^activate/(?P<key>.+)/$', ActivationView.as_view(), name="activate"),
    url(r'^resend_key/$', ResendActivationView.as_view(), name="resend"),
    url(r'^search/$', SearchView.as_view(), name='search'),
]