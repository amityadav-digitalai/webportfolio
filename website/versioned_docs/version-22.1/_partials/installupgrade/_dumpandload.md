:::warning
You must move the PostgreSQL 9.x directory (`mv /var/lib/pgsql/9.x /var/lib/pgsql/9.x_old`) after reloading the database dump, failing which the `teamforge provision` command will not be successful.
:::