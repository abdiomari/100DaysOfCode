#Generate random passwords

import random
import string

def get_random_password(length):
    characters = string.ascii_letters + string.digits + string.punctuation
    password = ''.join(random.choice(characters) for character in range(length))
    return password

#
random_password = get_random_password(9)
print("Your password is: ", random_password)