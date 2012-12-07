#!/bin/sh

restore=$PWD
cd $HOME

# Get a nice .vimrc file

curl -SsLo .vimrc http://git.io/AimPxw

# Create a nice .vim directory

mkdir -p .vim
mkdir -p .vim/undo .vim/backups
mkdir -p .vim/autoload .vim/bundle

# Get pathogen

curl -SsLo .vim/autoload/pathogen.vim http://git.io/PJdY8Q

# Get some bundles

cd .vim/bundle

# Get synatastic

curl -SsL http://git.io/syntastic > syntastic.tar.gz
tar -xzf syntastic.tar.gz
rm syntastic.tar.gz

# Get vim-javascript

curl -SsL http://git.io/vim-javscript > vim-javascript.tar.gz
tar -xzf vim-javascript.tar.gz
rm vim-javascript.tar.gz

# Get vim-trailing-whitespaces

curl -SsL http://git.io/vim-trailing-whitespace > vim-trailing-whitespace.tar.gz
tar -xzf vim-trailing-whitespace.tar.gz
rm vim-trailing-whitespace.tar.gz

# Get fugitive

curl -SsL http://git.io/oH2oWw > vim-fugitive.tar.gz
tar -xzf vim-fugitive.tar.gz
rm vim-fugitive.tar.gz

cd $restore
