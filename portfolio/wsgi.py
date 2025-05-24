import sys
from pathlib import Path
import os

from django.core.wsgi import get_wsgi_application
sys.path.append(str(Path(__file__).resolve().parent.parent))
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'portfolio.settings')

application = get_wsgi_application()
