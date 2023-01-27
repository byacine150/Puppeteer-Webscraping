with open("dataCeleb.txt", "r") as f:
    content = f.read()
content = content.replace("}]", "}],")

trans_table = content.maketrans("", "", '\\')
content = content.translate(trans_table)

with open("file2.txt", "w") as f:
    f.write(content)