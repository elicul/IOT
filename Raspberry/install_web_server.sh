#!/bin/bash

if [ "$(whoami)" != "root" ]; then
	echo "Run script as ROOT please. (sudo !!)"
	exit
fi

apt-get update -y
apt-get upgrade -y

apt-get install -y php7.0 php7.0-fpm php7.0-cli php7.0-opcache php7.0-mbstring php7.0-curl php7.0-xml php7.0-gd php7.0-mysql
apt-get install -y nginx

update-rc.d nginx defaults
update-rc.d php7.0-fpm defaults

sed -i 's/^;cgi.fix_pathinfo=1/cgi.fix_pathinfo=0/' /etc/php/7.0/fpm/php.ini
sed -i 's/# server_names_hash_bucket_size/server_names_hash_bucket_size/' /etc/nginx/nginx.conf

cat > /etc/nginx/sites-enabled/default << "EOF"
# Default server
server {
	listen 80 default_server;
	listen [::]:80 default_server;
	
	server_name _;
	root /var/www/default/public;
	index index.php index.html index.htm default.html;
	location / {
		try_files $uri $uri/ =404;
	}
	# pass the PHP scripts to FastCGI server
	location ~ \.php$ {
		include snippets/fastcgi-php.conf;
		fastcgi_pass unix:/run/php/php7.0-fpm.sock;
	}
	# optimize static file serving
	location ~* \.(jpg|jpeg|gif|png|css|js|ico|xml)$ {
		access_log off;
		log_not_found off;
		expires 30d;
	}
	# deny access to .htaccess files, should an Apache document root conflict with nginx
	location ~ /\.ht {
		deny all;
	}
}
# Raspberry server configuration
server {
	listen 80;
	listen [::]:80;
	server_name raspberry www.raspberry.com;
	location / {
		proxy_pass http://localhost:8000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
EOF

mkdir -p /var/www/default/public
cat > /var/www/default/public/index.php << "EOF"
<?php
class Application
{
	public function __construct()
	{
		phpinfo();
	}
}
$application = new Application();
EOF

mkdir -p /var/www/raspberry/public
cat > /var/www/raspberry/public/index.php << "EOF"
<?php
class Application
{
	public function __construct()
	{
		echo 'Hi raspberry';
	}
}
$application = new Application();
EOF

rm -rf /var/www/html

usermod -a -G www-data pi
chown -R pi:www-data /var/www
chgrp -R www-data /var/www
chmod -R g+rw /var/www

service nginx restart
service php7.0-fpm restart

# MySQL
apt-get -y install mysql-server

read -s -p "Type the password you just entered (MySQL): " mysqlPass

mysql --user="root" --password="$mysqlPass" --database="mysql" --execute="GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY '$mysqlPass'; FLUSH PRIVILEGES;"

# CREATE USER 'elicul' IDENTIFIED BY 'secret';GRANT ALL PRIVILEGES ON *.* TO 'elicul'@localhost IDENTIFIED BY 'secret';FLUSH PRIVILEGES;

service mysql restart

# PhpMyAdmin
read -p "Do you want to install PhpMyAdmin? <y/N> " prompt
if [ "$prompt" = "y" ]; then
	apt-get install -y phpmyadmin
	ln -s /usr/share/phpmyadmin /var/www/default/public
	echo "http://192.168.XXX.XXX/phpmyadmin to enter PhpMyAdmin"
fi

apt-get -y autoremove

wget -qO- https://deb.nodesource.com/setup_8.x | sudo -E bash -
apt-get install -y nodejs build-essential
