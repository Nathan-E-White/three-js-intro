#!/usr/bin/env bash
clear;
OWD=$(pwd);
V_NAME="three";
V_MAJ=0;
V_MIN=120;
V_PATCH=0;
V_CONTR="^";
printf "%s\n" "Installing Three.js";
cd "$(dirname "$0")" || exit 1;
cd "../" || exit 2;

which pnpm > /dev/null 2>&1 || {
    printf "%s\n" "pnpm is not installed. Please install pnpm first.";
    exit 3;
}

printf "%s\n" "Initializing pnpm...";
pnpm init;

printf "%s\n" "Installing Three.js dependencies...";
pnpm install;

printf "%s\n" "Installing Three.js...";
pnpm add --save "${V_NAME}@${V_CONTR}${V_MAJ}.${V_MIN}.${V_PATCH}";

printf "%s\n" "Updating package.json...";
pnpm update;

cd "$OWD" || exit 4;
exit 0;