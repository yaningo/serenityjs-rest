#!/bin/bash


./apache-tomcat-9.0.37/bin/startup.sh start
cp webapp.war ./apache-tomcat-9.0.37/webapps
