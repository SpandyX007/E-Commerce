from django.urls import path

from . import views

urlpatterns = [
	#Leave as empty string for base url
	path('', views.store, name="store"),
	path('cart/', views.cart, name="cart"),
	path('checkout/', views.checkout, name="checkout"),
	path('login/', views.login, name="login"),
	path('signup/', views.signup, name="signup"),
	path('product-details/<int:item_id>/', views.productdetails, name="productdetails"),
	path('deals/', views.deals, name="deals"),
	path('categories/', views.categories, name="categories"),

	path('search/', views.search_products, name="search_products"),
	path('update_item/', views.updateItem, name="update_item"),
	path('process_order/', views.processOrder, name="process_order"),

]