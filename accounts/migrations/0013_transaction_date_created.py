# -*- coding: utf-8 -*-
# Generated by Django 1.9.8 on 2016-08-03 06:56
from __future__ import unicode_literals

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0012_auto_20160803_0516'),
    ]

    operations = [
        migrations.AddField(
            model_name='transaction',
            name='date_created',
            field=models.DateTimeField(auto_now_add=True, default=datetime.datetime(2016, 8, 3, 6, 56, 3, 56023, tzinfo=utc)),
            preserve_default=False,
        ),
    ]
