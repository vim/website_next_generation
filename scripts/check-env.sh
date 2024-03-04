#!/bin/sh

# USAGE: compare two .env files and check if keys are missing in the first.
#        keys are in the format of "KEY=VALUE"
#
#   ARG 1: file which contains required keys
#   ARG 2: file to check for missing keys

die() {
    echo "error: $*"
    exit 1
}

file="$1"
ref_file="$2"

[ -f "$file" ] || die "missing arg: .env file to compare"
[ -f "$ref_file" ] || die "missing arg: reference .env file"

echo "comparing '$file' to '$ref_file'"
grep  -v "^#" "$file" |
    while read -r line; do
        key=$(echo "$line" | cut -d'=' -f 1)
        grep -q "$key" "$ref_file" || die "key '$key' missing in '$ref_file'"
    done
