# Generated by Django 5.1.6 on 2025-02-22 12:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('medicare', '0011_remove_category_product_count'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customer',
            name='is_staff',
        ),
        migrations.AlterField(
            model_name='customer',
            name='user_type',
            field=models.CharField(choices=[('customer', 'Customer')], default='customer', max_length=10),
        ),
    ]
