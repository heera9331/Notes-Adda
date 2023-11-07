# def solve(st: str):
#     n = len(st)
#     if n%2 != 0:
#         print(st[:n//2] + st[n//2+1:])
#     else:
#         print(st)

# st = "rahul"
# solve(st)


# hashMap = {}

# hashMap[3] = 4;
# hashMap[1] = 6;

# maxKey = max(hashMap)
# print(hashMap[maxKey])

# import getpass

# password = getpass.getpass("Enter your password");
# print(password)

# s = "str"

# s = list(s)
# print(str(s)[0])


# print(s1)


# class Student:

#     def __init__(self) -> None:
#         self.name = "Heera"

# s1 = Student()
# s2 = Student()

# s1.__delattr__("name")

# print(s1.name)

# stack = [2,3]
# print(stack)
# stack.pop(-1)
# print(stack)


# a = 3
# print(a.bit_count())

# class TreeNode:
#     def __init__(self, val):
#         self.val = val
#         self.left = None
#         self.right = None


# p = []
# q = []

# class Solution:
    
#     def preorder(self, root: TreeNode) -> None:
#         if not root:
#             return

#         print(root.val)
#         self.preorder(root.left)
#         self.preorder(root.right)

#     def find(self, root: TreeNode, key: int, path: list[int]) -> list[int]:
#         if not root:
#             return

#         if (root.val == key):
#             path.append(root.val)
#             .append(path)
#             print(path)
            
#             return

#         path.append(root.val)
#         self.find(root.left, key, path)
#         self.find(root.right, key, path)

#         if (path):
#             path.pop()


# if __name__:
#     root = TreeNode(1)

#     root.left = TreeNode(2)
#     root.right = TreeNode(3)

#     root.left.left = TreeNode(4)
#     root.left.right = TreeNode(5)

#     root.right.left = TreeNode(6)
#     root.right.right = TreeNode(7)

#     s = Solution() 

#     s.find(root, 4, [])
#     print(ans)

# i = 0
# while i<5:
#     print(i)

#     i+=1
#     if i == 3:
#         break

# else:
#     print(i)