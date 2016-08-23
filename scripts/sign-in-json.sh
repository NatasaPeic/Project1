#!/bin/bash


curl "http://tic-tac-toe.wdibos.com" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data ""

# data output from curl doesn't have a trailing newline
echo
