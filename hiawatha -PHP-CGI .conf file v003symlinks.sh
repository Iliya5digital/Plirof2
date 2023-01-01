# Hiawatha main configuration file
#

# VARIABLES
# With 'set', you can declare a variable. Make sure the name of the
# variable doesn't conflict with any of the configuration options.
# The variables are case-sensitive and cannot be redeclared.
#
#set LOCALHOST = 127.0.0.0/8


# GENERAL SETTINGS
#
ServerId = www-data
ConnectionsTotal = 1000
ConnectionsPerIP = 25
SystemLogfile = /var/log/hiawatha/system.log
GarbageLogfile = /var/log/hiawatha/garbage.log


# BINDING SETTINGS
# A binding is where a client can connect to.
#
Binding {
	Port = 80
}
#
#Binding {
#	Port = 443
#	TLScertFile = tls/hiawatha.pem
#	Interface = 127.0.0.1
#	MaxRequestSize = 2048
#	TimeForRequest = 30
#}


# BANNING SETTINGS
# Deny service to clients who misbehave.
#
#BanOnGarbage = 300
#BanOnMaxPerIP = 60
#BanOnMaxReqSize = 300
#KickOnBan = yes
#RebanDuringBan = yes


# COMMON GATEWAY INTERFACE (CGI) SETTINGS
# These settings can be used to run CGI applications.
#
#CGIhandler = /usr/bin/perl:pl
CGIhandler = /opt/lampp/bin/php-cgi:php
#CGIhandler = /usr/bin/python:py
#CGIhandler = /usr/bin/ruby:rb
#CGIhandler = /usr/bin/ssi-cgi:shtml
#CGIextension = cgi
#
#FastCGIserver {
#	FastCGIid = PHP7
#	ConnectTo = /run/php/php7.0-fpm.sock
#	Extension = php
#}


# URL TOOLKIT
# This URL toolkit rule was made for the Banshee PHP framework,
# which can be downloaded from http://www.banshee-php.org/
#
#UrlToolkit {
#	ToolkitID = banshee
#	RequestURI isfile Return
#	Match ^/(css|files|fonts|images|js)($|/) Return
#	Match ^/(favicon.ico|robots.txt)$ Return
#	Match [^?]*(\?.*)? Rewrite /index.php$1
#}


# DIRECTORY SETTINGS
# You can specify some settings per directory.
#
#Directory {
#	DirectoryID = static
#	Path = /css, /fonts, /images, /js
#	ExpirePeriod = 2 weeks
#}
#
#Directory {
#	DirectoryID = files
#	Path = /files
#	ShowIndex = yes
#	StartFile = index.html
#	ExecuteCGI = no
#}


# DEFAULT WEBSITE
# It is wise to use your IP address as the hostname of the default website
# and give it a blank webpage. By doing so, automated webscanners won't find
# your possible vulnerable website.
#
Hostname = 127.0.0.1
#WebsiteRoot = /var/www/hiawatha
WebsiteRoot = /opt/lampp/htdocs
# You can only have index.php OR index.html (or put an extra .hiawatha file in folder)
StartFile = index.html
AccessLogfile = /var/log/hiawatha/access.log
ErrorLogfile = /var/log/hiawatha/error.log
#added to show index of folder inf no index_hiawatha.html file is found
ShowIndex = yes
ExecuteCGI = yes
FollowSymlinks = yes

# VIRTUAL HOSTS
# Use a VirtualHost section for each website you want to host.
#
#VirtualHost {
#	Hostname = www.my-domain.com
#	WebsiteRoot = /var/www/my-domain/public
#	AccessLogfile = /var/www/my-domain/log/access.log
#	ErrorLogfile = /var/www/my-domain/log/error.log
#	TimeForCGI = 5
#	UseFastCGI = PHP7
#	UseToolkit = banshee
#	UseDirectory = static, files
#}
