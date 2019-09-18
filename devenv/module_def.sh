#!/bin/bash

img_name=charity-frontend

ACAR_VER=1.0.0

PREFIX=repo.luomutrip.com:8089

FLAG=dev

GIT_COMMIT=

if [ ! -n "$GIT_COMMIT" ]; then
	echo "normal build shell..."
    VERSION=latest
else
	echo "jenkins build shell..."
    VERSION=${ACAR_VER}_$GIT_COMMIT
fi

COMPANY=luomu
