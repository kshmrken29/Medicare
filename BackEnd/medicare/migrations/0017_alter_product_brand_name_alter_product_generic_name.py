# Generated by Django 5.1.5 on 2025-03-15 03:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('medicare', '0016_alter_post_unique_together'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='brand_name',
            field=models.CharField(max_length=200, unique=True),
        ),
        migrations.AlterField(
            model_name='product',
            name='generic_name',
            field=models.CharField(max_length=200, unique=True),
        ),
    ]
