from enum import Enum

from rest_framework import status


class ErrorEnum(Enum):
    PROTECTED = (
        {'details': 'Cannot delete Group because there is one or more Users assigned to it'},
        status.HTTP_405_METHOD_NOT_ALLOWED
    )
    
    def __init__(self, msg, code=status.HTTP_400_BAD_REQUEST):
        self.msg = msg
        self.code = code
