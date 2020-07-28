#!/bin/bash

if [[ ! $1 || ! $2 ]]; then
    echo "É necessário Passar a versão atual e a nova."
    echo "Ex.: ./release.sh 2.2.29 2.3.0-SNAPSHOT"
    exit 1;
fi;

echo "Upgrading versions from $1 to $2..."

mvn versions:set -DnewVersion=$2 -DoldVersion=$1 versions:commit

echo "Versions upgraded. Compiling parent..."
mvn clean install -DargLine="-Xmx800m"
echo "Parent successfully compiled."

echo "Success upgrading version. Check changed files in git."


