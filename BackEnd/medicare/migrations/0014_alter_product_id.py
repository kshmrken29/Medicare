# Generated by Django 5.1.6 on 2025-02-22 12:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('medicare', '0013_customer_is_staff_alter_customer_user_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
