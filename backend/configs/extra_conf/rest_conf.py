REST_FRAMEWORK = {
    'DEFAULT_RENDERER_CLASSES': (
        'rest_framework.renderers.JSONRenderer',
    ),
    'DATETIME_FORMAT': "%Y-%m-%d %H:%M",
    'EXCEPTION_HANDLER': 'core.handlers.error_handlers.custom_exception_handler',
    # 'DEFAULT_PAGINATION_CLASS': 'core.paginations.page_pagination.PagePagination',
    'DEFAULT_FILTER_BACKENDS': (
        'django_filters.rest_framework.DjangoFilterBackend',
    )
}