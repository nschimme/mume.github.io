#!/bin/bash

# Set VITE_LAST_UPDATED from last git commit
export VITE_LAST_UPDATED=$(git log -1 --format=%cd --date=format:'%B %Y')
echo "VITE_LAST_UPDATED=$VITE_LAST_UPDATED" >> $GITHUB_ENV

# Set VITE_HOSTNAME from CNAME file if it exists
if [ -f CNAME ] && [ "$GITHUB_REPOSITORY_OWNER" = "mume" ]; then
  export VITE_HOSTNAME="https://$(cat CNAME)"
else
  # Fallback for PR previews if host/prefix are provided via env
  if [ -n "$PREVIEW_HOST" ]; then
    export VITE_HOSTNAME="https://${PREVIEW_HOST}${PREVIEW_PREFIX}"
  else
    # Fallback for forks or main repo without CNAME
    OWNER="${GITHUB_REPOSITORY_OWNER:-mume}"
    REPO=$(echo "${GITHUB_REPOSITORY:-${OWNER}/docs}" | cut -d'/' -f2)
    if [ "$OWNER" = "mume" ] && [ "$REPO" = "docs" ]; then
      export VITE_HOSTNAME="https://docs.mume.org"
    elif [ "$REPO" = "$OWNER.github.io" ]; then
      export VITE_HOSTNAME="https://$OWNER.github.io"
    else
      export VITE_HOSTNAME="https://$OWNER.github.io/$REPO"
    fi
  fi
fi
echo "VITE_HOSTNAME=$VITE_HOSTNAME" >> $GITHUB_ENV
