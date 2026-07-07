x = y = z = "John"

print(x, y, z)

x,y,z = "Orange", "Banana", "Cherry"
## f, z, i = "John" ## INVALID WAY TO DO THIS:

# Traceback (most recent call last):
#   File "c:\neetcode-exhibition\python-playground\multiple_vars.py", line 6, in <module>
#     f, z, i = "John"
#     ^^^^^^^
# ValueError: too many values to unpack (expected 3)