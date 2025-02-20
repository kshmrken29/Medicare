from django.contrib import admin
from .models import Customer
from .models import Product


admin.site.register(Customer)
class CustomerAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'email', 'phone', 'created_at')
    search_fields = ('first_name', 'last_name', 'email')

admin.site.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'generic_name', 'brand_name', 'category', 'price', 'stock_quantity', 'description', 'usage_instructions', 'side_effects', 'prescription_required', 'expiry_date', 'manufacturer', 'dosage', 'form', 'status')
    search_fields = ('id', 'name', 'generic_name', 'brand_name', 'category', 'price', 'stock_quantity', 'description', 'usage_instructions', 'side_effects', 'prescription_required', 'expiry_date', 'manufacturer', 'dosage', 'form', 'status')