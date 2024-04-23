from django.urls import path
from .views import UserListCreate, UserRetrieveUpdateDestroy, CategoryListCreate, CategoryRetrieveUpdateDestroy, TransactionListCreate, TransactionRetrieveUpdateDestroy

urlpatterns = [
    path('users/', UserListCreate.as_view(), name='user_list'),
    path('users/<int:pk>/', UserRetrieveUpdateDestroy.as_view(), name='user_detail'),
    path('categories/', CategoryListCreate.as_view(), name='category_list'),
    path('categories/<int:pk>/', CategoryRetrieveUpdateDestroy.as_view(), name='category_detail'),
    path('transactions/', TransactionListCreate.as_view(), name='transaction_list'),
    path('transactions/<int:pk>/', TransactionRetrieveUpdateDestroy.as_view(), name='transaction_detail'),
]