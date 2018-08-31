#proxies would go here
#export http_proxy=http://http.proxy.proxy.com:8000
#export https_proxy=...
#after installing nvm from brew/apt 
export NVM_DIR=~/.nvm 
source $(brew --prefix nvm)/nvm.sh

#only do this if you're working with oracledb on node
# and you need to link the instaclients
#if[ -d /opt/oracle/instaclient_12_2 ]; then
#   export PATH=$PATH:/opt/oracle/instaclient_12_2
#   exort LD_LIBRARY_PATH=/opt/oracle/instaclient_12_2
#fi
#this will show you a list of the commits ahead of your local repo, it's to give you an idea if you should pull or commit first to resolve conflicts.
alias git-check="git fetch --all > /dev/null && git log --pretty=format: '%h%x09%ar%x09%an%x09%x09%s' HEAD..origin/HEAD"

#color support
export PS1="\[\033[36m\]\u\[\033]m\]@\[\033[32m\]\h:\[\033[33;1m\]\w\[\033[m\]\$"
export CLICOLOR=1
export LSCOLORS=ExFxBxDxCxegedabagacad
alias ls = "ls -Gfh"
