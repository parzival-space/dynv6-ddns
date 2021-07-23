#!/bin/bash

echo "Installing required dependencies...";

npm install > /dev/null;
npm install -g forever > /dev/null;
npm install -g forever-service > /dev/null;

echo "Installing service..."

forever-service install dynv6-service --script app.js > /dev/null;

echo "Sarting service..."

service dynv6-service start;

echo "Service installed!"
echo "Service: dynv6-service"
echo "service dynv6-service start"
echo "service dynv6-service stop"
echo "service dynv6-service restart"
