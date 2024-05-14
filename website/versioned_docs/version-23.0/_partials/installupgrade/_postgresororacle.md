
<div markdown="1">
PostgreSQL VAR::identifiers.postgres_long is installed automatically when you install TeamForge VAR::identifiers.teamforge. If you intend to use Oracle, CollabNet recommends that you let the installer run its course, make sure things work normally, and then set up your Oracle database and switch over to it.

If you want to use Oracle as your database, consider the following points:
* TeamForge VAR::identifiers.teamforge supports Oracle server VAR::identifiers.oracle_server and Oracle client VAR::identifiers.oracle_client.
* Oracle express edition is not supported for both client and server.
* Review Board VAR::identifiers.review_board was tested with PostgreSQL VAR::identifiers.postgres_long only. Review Board with Oracle was not tested.
* Git integration works only with PostgreSQL. Git integration is not supported with Oracle database.

The efficiency of your database can have an impact on your users' perception of the site's usability. If your site uses a PostgreSQL database (which is the default), you may want to consider tuning it to fit your specific circumstances. The default settings are intended for a small-to-medium site running on a single server. See What are the right PostgreSQL settings for my site? for recommendations from CollabNet's performance team on optimizing PostgreSQL for different conditions.
</div>
