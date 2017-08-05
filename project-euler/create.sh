#!/bin/bash

mkdir problem-${1}
touch problem-${1}/problem-${1}.js

printf "### Problem ${1}\n" >> problem-${1}/problem-${1}.md

printf "${2}\n\n" >> problem-${1}/problem-${1}.md
printf "#### Solution 1: [problem-${1}.js](./problem-${1}.js)\n" >> problem-${1}/problem-${1}.md
printf "* Time Complexity: \n" >> problem-${1}/problem-${1}.md
printf "* Space Complexity: \n" >> problem-${1}/problem-${1}.md

printf "${1}. [${3}](./problem-${1}/problem-${1}.md)\n" >> project-euler-problems.md
