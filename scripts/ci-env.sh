#!/bin/bash

# Set VITE_LAST_UPDATED from last git commit
export VITE_LAST_UPDATED=$(git log -1 --format=%cd --date=format:'%B %Y')
echo "VITE_LAST_UPDATED=$VITE_LAST_UPDATED" >> $GITHUB_ENV

# Set VITE_HOSTNAME from CNAME file if it exists
if [ -f CNAME ]; then
  export VITE_HOSTNAME="https://$(cat CNAME)"
else
  # Fallback for PR previews if host/prefix are provided via env
  if [ -n "$PREVIEW_HOST" ]; then
    export VITE_HOSTNAME="https://${PREVIEW_HOST}${PREVIEW_PREFIX}"
  else
    export VITE_HOSTNAME="https://docs.mume.org"
  fi
fi
echo "VITE_HOSTNAME=$VITE_HOSTNAME" >> $GITHUB_ENV
