#!/usr/bin/env pypy

with open('../Naive-Switchy-PAC/proxy.pac', 'r') as f:
    content = f.read()

assert "'" not in content
content = content.rstrip('\r\n')
assert "\n" not in content

content = "var naive_pac_data = '" + content + "';"

with open('pac_data.js', 'w') as f:
    f.write(content)
