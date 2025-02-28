from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.http import HttpResponseForbidden
from functools import wraps

class CustomerManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        extra_fields.setdefault('is_staff', False)  
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('user_type', 'admin')
        return self.create_user(email, password, **extra_fields)

class Customer(AbstractBaseUser, PermissionsMixin):
    USER_TYPES = (
        ('customer', 'Customer'),
        ('admin', 'Admin'),
    )

    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    user_type = models.CharField(max_length=10, choices=USER_TYPES, default='customer')
    phone = models.CharField(max_length=15, blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)  

    objects = CustomerManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

    def has_module_perms(self, app_label):
        return self.user_type == 'admin'

    def has_perm(self, perm, obj=None):
        return self.user_type == 'admin'

def admin_required(view_func):
    @wraps(view_func)
    def wrapper(request, *args, **kwargs):
        if not request.user.is_authenticated:
            return HttpResponseForbidden("You must be logged in.")
        if request.user.user_type != 'admin':
            return HttpResponseForbidden("Access denied. Admins only.")
        return view_func(request, *args, **kwargs)
    return wrapper

class Product(models.Model):
    generic_name = models.CharField(max_length=200)
    brand_name = models.CharField(max_length=200)
    image = models.ImageField(upload_to='products/', null=True, blank=True)
    category = models.ForeignKey('Category', on_delete=models.PROTECT, related_name='products')
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock_quantity = models.IntegerField()
    description = models.TextField()
    usage_instructions = models.TextField()
    side_effects = models.TextField()
    prescription_required = models.BooleanField()
    expiry_date = models.DateField()
    manufacturer = models.CharField(max_length=200)
    dosage = models.CharField(max_length=100)
    form = models.CharField(max_length=100)
    status = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.brand_name} ({self.generic_name})"

class Category(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()

    def product_count(self):
        return self.products.count()  

    def __str__(self):
        return self.name

class Post(models.Model):
    POST_TYPES = (
        ('top', 'Top Product'),
        ('exclusive', 'Exclusive Product'),
    )
    
    product = models.ForeignKey(
        Product, 
        on_delete=models.CASCADE, 
        related_name='posts'
    )
    type = models.CharField(
        max_length=10, 
        choices=POST_TYPES
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.product.brand_name} - {self.type}"

    class Meta:
        ordering = ['-created_at']
        unique_together = ['product', 'type']
