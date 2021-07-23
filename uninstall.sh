#!/bin/bash

echo "Installing required dependencies...";

npm install > /dev/null;
npm install -g forever > /dev/null;
npm install -g forever-service > /dev/null;

echo "Installing service..."

forever-service delete dynv6-service > /dev/null;

echo "Service uninstalled!"