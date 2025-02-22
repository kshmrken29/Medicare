from django.contrib import admin
from .models import Customer, Product, Category

class CustomerAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'email', 'phone', 'created_at')
    search_fields = ('first_name', 'last_name', 'email')

class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'generic_name', 'brand_name', 'category', 'price', 'stock_quantity', 'description', 'usage_instructions', 'side_effects', 'prescription_required', 'expiry_date', 'manufacturer', 'dosage', 'form', 'status')
    search_fields = ('id', 'generic_name', 'brand_name', 'category__name', 'manufacturer', 'dosage', 'form', 'status')

class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'product_count')
    search_fields = ('name', 'description')

admin.site.register(Customer, CustomerAdmin)
admin.site.register(Product, ProductAdmin)
admin.site.register(Category, CategoryAdmin)