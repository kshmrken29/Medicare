# Generated by Django 5.1.6 on 2025-02-19 08:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('medicare', '0003_alter_product_brand_name_alter_product_generic_name_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='image_url',
        ),
    ]
