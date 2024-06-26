<!-- Artifact artf415006 : Documenting EOL for cvs -->
<div class="panel panel-info">
<div class="panel-heading">**Before You Begin—CVS End-of-Life**</div>
<div class="panel-body" markdown="1">
CVS is no longer supported by TeamForge 20.2 and later. You must migrate your CVS repositories to any of the other supported SCM tool (Git/SVN for example) when you upgrade to TeamForge 20.2 or later.

1. Undeploy CVS on the TeamForge SCM server that runs CVS. Do this after you stop the TeamForge services while upgrading to TeamForge 20.2 or later versions on the same hardware. Skip this step in case of new hardware upgrades. 

   ```shell
   teamforge undeploy -s cvs
   ````
2. Remove `cvs` from the `host:SERVICES` token of the `site-options.conf` file (on all the TeamForge servers), failing which the `teamforge provision` command aborts with an error.

</div>
</div>