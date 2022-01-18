# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '-2#se2w2t^20h%7g6_6+(zztxlmz#99f*r(dgsri7@ip_8zov@'

# Database
# https://docs.djangoproject.com/en/3.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'mysql.connector.django',
        'NAME': 'drf_jwt_database',
        'USER': 'root',
<<<<<<< HEAD:drf_jwt_backend/drf_jwt_backend/local_settings.py
        'PASSWORD': 'Aghalebi33',
=======
        'PASSWORD': 'Jared0351!',
>>>>>>> 1ecbb00774f67d8510ab74abac2d395f5a22d509:Youclone-Backend/youclone-backend/local_settings.py
        'HOST': '127.0.0.1',
        'PORT': '3306',
        'OPTIONS': {
            'autocommit': True
        }
    }
}
