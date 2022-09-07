# import graphene
# from graphene_django import DjangoObjectType
#
# from apps.other_groups.models import OtherGroupModel
# from apps.other_users.models import OtherUserModel
#
#
# class GroupObjectType(DjangoObjectType):
#     class Meta:
#         model = OtherGroupModel
#         fields = (
#             'id', 'name', 'description'
#         )
#
#
# class UserObjectType(DjangoObjectType):
#     class Meta:
#         model = OtherUserModel
#         group = GroupObjectType
#         fields = (
#             'id', 'username', 'created', 'group'
#         )
#
#
# class Query(graphene.ObjectType):
#     all_groups = graphene.List(GroupObjectType)
#     all_users = graphene.List(UserObjectType)
#     group_by_id = graphene.Field(UserObjectType, id=graphene.String(required=True))
#
#     def resolve_all_groups(root, info):
#         return OtherGroupModel.objects.all()
#
#     def resolve_all_users(root, info):
#         return OtherUserModel.objects.all()
#
#     def resolve_group_by_id(root, info, id):
#         try:
#             return OtherUserModel.objects.get(pk=id)
#         except Exception:
#             return 'User does not exist'
#
#
# schema = graphene.Schema(query=Query)
