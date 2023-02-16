#!/usr/bin/bash
#!/bin/bash

for (( i=2; i<=20; i++ ))
do
  is_prime=true
  for (( j=2; j<i; j++ ))
  do
    if [ $((i%j)) -eq 0 ]
    then
      is_prime=false
      break
    fi
  done
  if [ "$is_prime" = true ]
  then
    echo "$i is prime"
  fi
done

