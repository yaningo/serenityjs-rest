while true
do
  HTTPD=`curl -A "Web Check" -sL --connect-timeout 3 -w "%{http_code}\n" "http://localhost:8080" -o /dev/null`
  until [ "$HTTPD" == "200" ]; do
    printf '.'
    sleep 3
    HTTPD=`curl -A "Web Check" -sL --connect-timeout 3 -w "%{http_code}\n" "http://localhost:8080" -o /dev/null`
  done
  sleep 5
done